import Classroom from "../models/classroom.model.js";

export const create = async (req, res) => {

    try {
        // const classroom_id = req.params.id;
        const { classroom_id, subject, admin_id, participants } = req.body;
        if (!classroom_id || !admin_id) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        console.log("ll", classroom_id, subject, admin_id, participants)


        const existingClassroom = await Classroom.findOne({ classroom_id });
        if (existingClassroom) {
            return res.status(400).json({ message: 'Classroom already exists' });
        }
        console.log(existingClassroom, "l")

        console.log(participants, "is")
        const now = new Date(); 
        const newClassroom = new Classroom({
            classroom_id,
            subject,
            admin_id,
            participants: participants,
            date: now.toLocaleDateString('en-GB'), // e.g. "09/06/2025"
            day: now.toLocaleDateString('en-GB', { weekday: 'long' })  //  participants is an array of user objects
            // date: "12/10/2025", // e.g. "09/06/2025"
            // day: "Saturday"  //  participants is an array of user objects
        });
        console.log(newClassroom, "");

        await newClassroom.save();
        res.status(201).json({ newClassroom });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
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

        if (!admin_id) {
            return res.status(400).json({ message: 'Please provide admin_id' });
        }

        const classrooms = await Classroom.find({ admin_id })
            .select('subject participants date day') // select only subject & participants
            .populate('participants', 'fullname university_rollno class_rollno'); // populate participant info
        console.log("admin", admin_id, classrooms);
        if (!classrooms || classrooms.length === 0) {
            return res.status(404).json({ message: 'No classrooms found for this admin' });
        }

        const result = classrooms.map(classroom => {
            // current date and time
console.log(classroom,"calss obhject");
            return {
                subject: classroom.subject,
                participants: classroom.participants,
                date: classroom.date, // e.g. "12/02/2025"
                day: classroom.day // e.g. "Monday"

                // date:"12/02/2025",
                // day:"Thursday"
            };
        });

        

        console.log(result, "res");

        res.status(200).json({ classrooms: result });

    } catch (error) {
        console.error("Error fetching classrooms:",);
        res.status(500).json({ message: 'Server error' });
    }
};
//viv changes
