const mongoose          = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
      username: {
        type: String,
        trim: true,
        required: [true, 'Username is required.'],
        unique: true
      },
      email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      },
      passwordHash: {
        type: String,
        required: [true, 'Password is required.']
      }
    },
    {
      timestamps: true
    }
  );


//GENERACION DEL MODELO
const User = model('User', userSchema)

//EXPORTACIONES
module.exports = User