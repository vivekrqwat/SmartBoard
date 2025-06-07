import Classroom from "../models/classroom.model.js";

export const create = async (req, res) => {

    try{
        // const classroom_id = req.params.id;
        const { classroom_id, subject, admin_id } = req.body;
console.log("classroomid",classroom_id,"subject ",subject," adminid",admin_id);
        if(!classroom_id ||!admin_id ){
            return res.status(400).json({message: 'Please provide all required fields'});
        }

        const existingClassroom = await Classroom.findOne({classroom_id});
        if(existingClassroom){
            return res.status(400).json({message: 'Classroom already exists'});
        }

        const newClassroom = new Classroom({ 
            classroom_id,
            subject,
            admin_id,
            participants: participants.map(participant => participant._id)
        });
console.log("new class created")
        await newClassroom.save();
        res.status(201).json({ newClassroom});

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
}

// export const join = async (req, res) => {
//     try{
//         const classroom_id = req.params.id;
//         const {user_id} = req.body;

//         if(!classroom_id || !user_id){
//             return res.status(400).json({message: 'Please provide all required fields'});
//         }

//         const existingClassroom = await Classroom.findOne({classroom_id});
//         if(!existingClassroom){
//             return res.status(404).json({message: 'Classroom not found'});
//         }

//         existingClassroom.participants.push(user_id);
//         await existingClassroom.save();
//         res.status(200).json({existingClassroom});

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({message: 'Internal server error'});
//     }
// }


export const getClassroom = async (req, res) => {
    try {
        const { admin_id } = req.body;
        console.log(admin_id)
        if (!admin_id) {
            return res.status(400).json({ message: 'Please provide admin_id' });
        }

        const classrooms = await Classroom.find({ admin_id })
            .select('subject participants') // select only subject & participants
            .populate('participants', 'fullname university_rollno class_rollno'); // populate participant info

        if (!classrooms || classrooms.length === 0) {
            return res.status(404).json({ message: 'No classrooms found for this admin' });
        }

        const result = classrooms.map(classroom => ({
            subject: classroom.subject,
            participants: classroom.participants
        }));
        console.log(result);
        res.status(200).json({ classrooms: result });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

