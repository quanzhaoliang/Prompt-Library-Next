import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username:{
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[2-zA-Z0-9._]+(?<![_.])$/, 'Invalid username! It must be between 8 and 20 characters long and can only contain letters, numbers, and be unique!'],
    },
    image:{
        type: String,
    }
});

// Check if the model is already defined, if not define it
const User = models.User || model('User', userSchema);

export default User;