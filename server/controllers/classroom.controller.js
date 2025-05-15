import Classroom from "../models/classroom.model.js";

export const create = async (req, res) => {

    try{
        const classroom_id = req.params.id;
        const {subject, admin_id} = req.body;

        if(!classroom_id || !subject ){
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        const existingClassroom = await Classroom.findOne({classroom_id});
        if(existingClassroom){
            return res.status(400).json({message: 'Classroom already exists'});
        }

        const newClassroom = new Classroom({
            classroom_id,
            subject,
            admin_id
        });

        await newClassroom.save();
        res.status(201).json({ newClassroom});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const join = async (req, res) => {
    try{
        const classroom_id = req.params.id;
        const {user_id} = req.body;

        if(!classroom_id || !user_id){
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        const existingClassroom = await Classroom.findOne({classroom_id});
        if(!existingClassroom){
            return res.status(404).json({message: 'Classroom not found'});
        }

        existingClassroom.participants.push(user_id);
        await existingClassroom.save();
        res.status(200).json({existingClassroom});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}