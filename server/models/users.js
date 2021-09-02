const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
      type: 'string',
      required: true,
    },
    lastname: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    created_at: {
      type: 'date',
      default: new Date(),
    },
    avatar: {
      type: Object,
      required: false,
      contains:{
        url: {
          type: 'string',
        },
        publicid: {
          type: 'string',
        }
      }
    },
    deleted: {
      type: 'boolean',
      default: false,
    }
})

module.exports = User = mongoose.model("Users", UserSchema);