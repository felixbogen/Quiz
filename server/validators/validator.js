const isEmpty = require('is-empty');
const validator = require('validator');

module.exports.loginvalidator = (data) => {
  const errors = {};
  
  data.email = !(isEmpty(data.email)) ? data.email : '';
  data.password = !(isEmpty(data.password)) ? data.password : '';

  let emailError = validator.isEmpty(data.email) ? "Email is empty" : (!validator.isEmpty(data.email) ? "Please provide a valid email" : '');
  let passworderror = validator.isEmpty(data.password) ? "Password is requierd" : '';

  if (emailError) errors.email = emailError;
  if (passworderror) errors.password = passworderror;

  return{
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports.reqistervalidator = (data) => {
  const errors = {};

  data.email = !(isEmpty(data.email)) ? data.email : '';
  data.password = !(isEmpty(data.password)) ? data.password : '';
  data.firstname = !(isEmpty(data.firstname)) ? data.firstname : '';
  data.lastname = !(isEmpty(data.lastname)) ? data.lastname : '';

  let emailerror = validator.isEmpty(data.email) ? "Email is empty" : (!validator.isEmpty(data.email) ? "Please provide a valid email" : '');
  let passworderror = validator.isEmpty(data.password) ? "Password is requierd" : '';
  let firstnameerror = validator.isEmpty(data.firstname) ? "First name is requierd" : '';
  let lastnameerror = validator.isEmpty(data.lastname) ? "Last name is requierd" : '';


  if (emailerror) errors.email = emailerror;
  if (passworderror) errors.password = passworderror;
  if (firstnameerror || lastnameerror) errors.firstname = "full name is required";

  return{
    errors,
    isValid: isEmpty(errors)
  }
}