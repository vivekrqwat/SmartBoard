import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateTokens.js';


export const signup = async (req, res)=>{
    try {
        const { fullname, password, confirmPassword, email, university_rollno, class_rollno } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: 'Passwords do not match'})
        }

        const existingAdmin = await User.findOne({university_rollno});
        if(existingAdmin){
            return res.status(400).json({error: 'User already exists'})
        }

        const existingEmail = await User.findOne({email})
         if(existingEmail){
            return res.status(400).json({error: 'Email already exists'})
        }

        const existingUniversityRollno = await User.findOne({university_rollno});
        if(existingUniversityRollno){
            return res.status(400).json({error: 'university roll no already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ fullname, password: hashedPassword, email, university_rollno, class_rollno });
        generateToken(newUser._id, res);
        await newUser.save();
        res.status(201).json({ newUser });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const login = async (req,res)=>{
    try {
        
        const { university_rollno, password } = req.body;

        const user = await User.findOne({ university_rollno });
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        generateToken(user._id, res);
        res.status(200).json({ fullname: user.fullname, email: user.email, university_rollno: user.university_rollno, class_rollno: user.class_rollno });

    } catch (error) {
        res.status(400).json({ error: error.message });
    } 

}


export const logout = (req, res) => {
    
    try{
        res.cookie('jwt', '', { maxAge: 0 });
        return res.status(200).json({ message: "User logged out successfully" });
    }
    catch(error){
        console.log('error in logout controller ', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
    
};