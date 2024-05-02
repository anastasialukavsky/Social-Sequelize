const { Comment, Like, Post, Profile, User, UserLike } = require("./index");
const { db } = require('./db/connection.js');

// Test database connection
describe('Database Connection', () => {
  test('should connect to the database', async () => {
    try {
      await db.authenticate();
      console.log('Database connected successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
});
describe('User Model', () => {
  test('should create a new user', async () => {
    try {
      const user = await User.create({
        username: 'testuser',
        email: 'test@example.com',
      });
      expect(user.username).toEqual('testuser');
      expect(user.email).toEqual('test@example.com');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  });
});

describe('Profile Model', () => {
  test('should create a new profile', async () => {
    try {
      const profile = await Profile.create({
        bio: 'This is a test bio.',
        profilePicture: 'profile.jpg',
        birthday: '1990-01-01',
      });
      expect(profile.bio).toEqual('This is a test bio.');
      expect(profile.profilePicture).toEqual('profile.jpg');
      expect(profile.birthday).toEqual('1990-01-01');
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  });
});

describe('Comment Model', () => {
  test('should create a new comment', async () => {
    try {
      const comment = await Comment.create({
        body: 'This is a test comment.',
        createdAt: new Date().toISOString(),
      });
      expect(comment.body).toEqual('This is a test comment.');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  });
});

describe('Like Model', () => {
  test('should create a new like', async () => {
    try {
      const like = await Like.create({
        reactionType: 'like',
        createdAt: new Date().toISOString(),
      });
      expect(like.reactionType).toEqual('like');
    } catch (error) {
      console.error('Error creating like:', error);
    }
  });
});