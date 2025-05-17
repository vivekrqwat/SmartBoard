
import mongoose from 'mongoose';

const classroomSchema = new mongoose.Schema({
 classroom_id: {
    type: String,
    required: true,
    unique: true
  }, 
  subject: {
    type: String,
    required: true
  },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },

  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    default: [],
    ref: 'User'
  }]

}, {
  timestamps: true
});

const Classroom = mongoose.model('Classroom', classroomSchema);

export default Classroom;
