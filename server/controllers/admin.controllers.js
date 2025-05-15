

export const signup = async (req, res)=>{
    try {
        const { username, fullname, password, email, employee_id } = req.body;
        const admin = new Admin({ username, fullname, password, email, employee_id });
        await admin.save();
        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export const login = async (req,res)=>{
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

