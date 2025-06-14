const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "username should be unique"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email should be unique"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
      unique: [true, "phone number should be unique"],
    },
    userType: {
      type: String,
      required: [true, "user type is required"],
      default: "client",
      enum: ["client", "driver", "vendor", "admin"],
    },
    profilePhoto: {
      type: String,
      default:
        "https://imgs.search.brave.com/YSmQCdADoCkN1fNn3u1AalRn23Hi4mdzosG7OjFNdCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtUE5H/LURvd25sb2FkLUlt/YWdlLnBuZw",
    },
    answer:{
      type:String,
      required:[true,'Answer is required']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
