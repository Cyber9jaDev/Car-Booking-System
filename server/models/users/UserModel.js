import mongoose, { Schema } from "mongoose";
import validator from "validator";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minLength: [4, 'Username cannot be less than 4 characters ']
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    index: true,
    validate: {
      validator: ( value ) => {
        if(!validator.isEmail(value)){
          throw new Error('Invalid email');
        }
      },
      message: () => {
        return 'Email provided is not a valid email address'
      }
    }
  },
  
  password: {
    type: String,
    required: [ true, 'Password is required'],
    minLength: [ 6, 'Password must bea at least 8 characters long']
  }
}, { minimize: false, timestamps: true });


const User = mongoose.model('User', UserSchema);


export default User;