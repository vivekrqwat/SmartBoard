import Classroom from "../models/classroom.model.js";

export const getParticipants = async (req, res) => {

    const {classroom_id, admin_id} = req.body;

    if (!classroom_id || !admin_id) {
      return { error: 'Classroom ID and Admin ID are required.' };
    }

  try {
    const classroom = await Classroom.findOne({
      classroom_id ,
      admin_id
    }).populate('participants'); // populates User details from 'participants' array

    if (!classroom) {
      return { error: 'Classroom not found or not authorized.' };
    }

    res.status(200).json({participants: classroom.participants});

  } catch (err) {
    console.error("Error fetching participants:", err);
    return { error: 'Server error' };
  }
};
