import mongoose from 'mongoose';
import { Activity } from '../models/activity.js';
import { LeaderboardEntry } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        username: 'maya.chen',
        email: 'maya.chen@example.com',
        name: 'Maya Chen',
        avatar: 'https://i.pravatar.cc/150?img=47',
      },
      {
        username: 'jordan.rivera',
        email: 'jordan.rivera@example.com',
        name: 'Jordan Rivera',
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
      {
        username: 'sam.taylor',
        email: 'sam.taylor@example.com',
        name: 'Sam Taylor',
        avatar: 'https://i.pravatar.cc/150?img=32',
      },
    ]);

    const teams = await Team.insertMany([
      { name: 'Summit Striders', members: [users[0]._id, users[1]._id] },
      { name: 'Morning Momentum', members: [users[2]._id] },
    ]);

    await Activity.insertMany([
      { user: users[0]._id, type: 'Strength training', duration: 45, points: 90, completedAt: new Date('2026-09-08') },
      { user: users[1]._id, type: 'Outdoor run', duration: 32, points: 75, completedAt: new Date('2026-09-09') },
      { user: users[2]._id, type: 'Yoga', duration: 28, points: 55, completedAt: new Date('2026-09-10') },
      { user: users[0]._id, type: 'Cycling', duration: 50, points: 110, completedAt: new Date('2026-09-11') },
    ]);

    await LeaderboardEntry.insertMany([
      { user: users[0]._id, team: teams[0]._id, points: 200, rank: 1 },
      { user: users[1]._id, team: teams[0]._id, points: 150, rank: 2 },
      { user: users[2]._id, team: teams[1]._id, points: 55, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        name: 'Full-body foundation',
        description: 'A balanced workout for building strength and movement confidence.',
        difficulty: 'beginner',
        duration: 30,
        exercises: [
          { name: 'Bodyweight squat', sets: 3, repetitions: 12 },
          { name: 'Incline push-up', sets: 3, repetitions: 10 },
          { name: 'Dead bug', sets: 3, repetitions: 10 },
        ],
      },
      {
        name: 'Tempo runner',
        description: 'A focused interval session to improve pace and cardiovascular fitness.',
        difficulty: 'intermediate',
        duration: 40,
        exercises: [
          { name: 'Warm-up jog', sets: 1, repetitions: 8 },
          { name: 'Tempo interval', sets: 5, repetitions: 3 },
          { name: 'Cool-down walk', sets: 1, repetitions: 5 },
        ],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
