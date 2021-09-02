const express = require("express");
const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkauth = require("../middleware/check-auth");
const {
  loginvalidator,
  reqistervalidator,
} = require("../validators/validator");

const router = express.Router();
const test = true;


router.post("/login", (req, res) => {
  const { errors, isValid } = loginvalidator(req.body);
  if(test) {
    Users.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        res.json({ success: false, message: "Email does not exist" });
      } else {
        bcrypt.compare(req.body.password, user.password).then((success) => {
          if (!success) {
            res.json({ success: false, message: "Invalid Password" });
          } else {
            const payload = {
              id: user._id,
              name: user.firstname,
            };
            jwt.sign(payload, process.env.APP_SECRET, (err, token) => {
              res.json({
                user,
                token: "Bearer Token: " + token,
                success: true,
              });
            });
          }
        });
      }
    });
  }
});

router.post("/register", (req, res) => {
  const { errors, isValid } = reqistervalidator(req.body);
  if (isValid) {
    req.json({ success: false, errors });
  } else {
    const { firstname, lastname, email, password } = req.body;
    const registerUser = new Users({
      firstname,
      lastname,
      password,
      email,
      created_at: new Date(),
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(registerUser.password, salt, (hashErr, hash) => {
        if (err || hashErr) {
          res.json({ message: "error hashing", success: false });
          return;
        }
        registerUser.password = hash;
        registerUser
          .save()
          .then(() => {
            res.json({ message: "User Created Succsesfully", success: true });
          })
          .catch((er) => res.json({ message: er.message, success: false }));
      });
    });
  }
});

router.get('/:id', checkauth, (req, res) => {
  Users.findOne({ id: req.params.id}).then((user) => {
    res.json({user, success: true});
  }).catch(er => {
      res.json({message: er.message, success: false});
  })
})

module.exports = router;
