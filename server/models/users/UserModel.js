import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { BadRequestError, NotFoundError } from "../../errors/CustomAPIError.js";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minLength: [4, 'Name cannot be less than 4 characters ']
  },

  phone: {
    type: String,
    required: true,
    trim: true,
    minLength: [11, 'Username cannot be less than 11 characters']
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
    minLength: [ 8, 'Password must bea at least 8 characters long']
  },

}, { minimize: false, timestamps: true });

// Hash password before saving to the database
UserSchema.pre('save', function(){ 
  if(!this.isModified('password')) return;
  return this.password = bcrypt.hashSync(this.password, 10);;
});

// Check for an existing phone number
UserSchema.statics.phoneNumberAlreadyExists = async function(phone){
  const foundPhoneNumber = await User.findOne( { phone });
  if(foundPhoneNumber) throw new BadRequestError('Phone number is taken');
  return false;
}

// Check for an existing email
UserSchema.statics.emailAlreadyExists = async function(email){
  const foundEmail = await User.findOne({ email });
  if(foundEmail) throw new BadRequestError('Email is in use');
  return false;
}

// Find single user
UserSchema.statics.findUser = async function(email){
  const user = await User.findOne({ email });
  if(user) return user; 
  throw new NotFoundError('User does not exist');
}

// compare password before approval
UserSchema.methods.comparePassword = function(password){
  if(!password) return;
  return bcrypt.compareSync(password, this.password); // returns true if passwords match and otherwise false
}

// Generate JWT
UserSchema.methods.generateJWT = function(){
  return jwt.sign({userId: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
}

// Remove password from item
UserSchema.methods.toJSON = function(){
  const { password, ...rest } = this.toObject();
  return rest;
}

const User = mongoose.model('User', UserSchema);

export default User;