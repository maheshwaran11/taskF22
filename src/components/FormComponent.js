/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  
    /* 
        # TASK

        Points: 6

        1. Validate all the fields respectively.
            a. Full Name should have min 5 characters
            b. Email validation for email field
            c. Password should have atleast 2 uppercase letter, 2 lowercase letter & 1 number. (eg. F22Labs)
        2. Show error messages below every field.
        3. Validate only on form submit.
        4. On successful data input navigate the user to /home route. 

         
    */
    const [formInputs, setFormInputs] = useState({
      fullName: '',
      email: '',
      password: ''
    });

    const [validation, setValidation] = useState({
      fullName: '',
      email: '',
      password: ''
    });

   function handleChange(event) {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
    checkValidation();
  }

   const checkValidation = () => {
    let errors = {...validation};

    //first Name validation
    if (!formInputs.fullName.trim()) {
      errors.fullName = "Full name is required";
    } else {
      errors.fullName = "";
    }

    //email validation
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formInputs.email.trim()) {
      errors.email = "Email is required";
    }  else if (!formInputs.email.match(mailformat)) {
      errors.email = 'Please enter a valid email address';
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = '/^(?=.*[a-z]).{6,20}$/';
    const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
    const cond3 = '/^(?=.*[0-9]).{6,20}$/';
    const passPattern = /(?=(.*\d){1})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})/;
    const password = formInputs.password;
    if (!password) {
      errors.password = 'Password is required';
    } else if (!password.match(passPattern)) {
      errors.password = "Password doesn't met the criteria";
    } else {
      errors.password = '';
    }
    
    setValidation(errors)
   }


  useEffect(() => {
    checkValidation();
  }, [formInputs]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation()
    if(validation.email != '' || validation.fullName != '' || validation.password != '') {
      checkValidation();
    } 
    else {
      navigate("/home");
    }
  };

  return (
    <form className="space-y-4" id="registrationForm" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName" className="sr-only">
          Full Name
        </label>

        <input
          placeholder="Full name"
          id="fullName"
          name="fullName"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formInputs.fullName}
          className="-mt-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="pl-2 py-3 errorText">{validation.fullName && <span>{validation.fullName}</span>}</div>
        
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>

        <input
          placeholder="Email Address"
          id="email"
          name="email"
          type="text"
          onChange={(e) => handleChange(e)}
          value={formInputs.email}
          className="-mt-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="pl-2 py-3 errorText">{validation.email && <span>{validation.email}</span>}</div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={(e) => handleChange(e)}
          value={formInputs.password}
          className="-mt-2 block w-full shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="pl-2 py-3 errorText">{validation.password && <span>{validation.password}</span>}</div>
      </div>

      <div>

        
      <button
      type="submit"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Create your account
      </button>

          
        
        
      </div>
    </form>
  );
};

export default FormComponent;
