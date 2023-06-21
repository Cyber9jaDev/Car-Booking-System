import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import { BadRequestError, NotFoundError } from "../../errors/CustomAPIError.js";

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
  },

  token: {
    type: String,
    default: ''
  }
}, { minimize: false, timestamps: true });




// Hash password before saving to the database

UserSchema.statics.hasExistingUsername = async function(username){
  const foundUsername = await User.findOne( { username });
  if(foundUsername) throw new BadRequestError('Username is taken');
  return false;
}

UserSchema.statics.hasExistingEmail = async function(email){
  const foundEmail = await User.findOne({ email });
  if(foundEmail) throw new BadRequestError('Email is in use');
  return false;
}

UserSchema.statics.findUser = async function(email){
  const user = await User.findOne({ email });
  if(user) return user; 
  throw new NotFoundError('User does not exist');
}

UserSchema.pre('save', function(){ 
  if(!this.isModified('password')) return;
  return this.password = bcrypt.hashSync(this.password, 10);;
});

// compare password before approval
UserSchema.methods.isCorrectPassword = function(password){
  if(!password) return;
  return bcrypt.compareSync(password, this.password); // returns true if passwords match and otherwise false
}







// Remove password from item


// Create JWToken




const User = mongoose.model('User', UserSchema);


export default User;