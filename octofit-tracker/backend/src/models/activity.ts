import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true, trim: true },
  duration: { type: Number, required: true, min: 0 },
  points: { type: Number, default: 0, min: 0 },
  completedAt: { type: Date, default: Date.now },
}, { timestamps: true })

export const Activity = mongoose.model('Activity', activitySchema)