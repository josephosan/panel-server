const yup = require('yup');

const userValidate = yup.object({
  confirmPassword: yup
    .string()
    .min(8, 'Passwords does not match!')
    .max(255, 'Passwords does not match!')
    .required('Confirm Password is required!'),
  
  password: yup
    .string()
    .min(8, 'Password should be at least 8 chracters!')
    .max(255, 'Password can\'t be more than 255 chracters!')
    .required('Password is required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Password must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
    ),
  
  email: yup
    .string()
    .email('Please enter a valid Email!')
    .min(2, 'Email should be at least 2 chracters')
    .max(30, 'Eamil can\'t be more than 30 chracters!')
    .required('Email is required!'),
  
  name: yup
    .string()
    .min(2, 'Name should be at least 2 chracters!')
    .max(20, 'Name can\'t be more than 20 chracters!')
    .required('Name is required!'),
});

module.exports = userValidate;
