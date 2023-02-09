//! UseNavigate

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Signup({setUserData}) {
//   let [fdata,setFdata]=useState({fn:"",ln:""});

//   let navigate= useNavigate()

//   let changeFdata=({target:{value,name}})=>
//   {
//     setFdata({...fdata,[name]:value})
//   }

//   let sendFadata=(e)=>
//   {
//     setUserData(fdata);
//     navigate("/login")
//     e.preventDefault()
//   }  
// return (
//     <div>
//       <form onSubmit={sendFadata}>
//         <input type="text" placeholder='First Name'  name='fn' onChange={changeFdata}/> <hr />
//         <input type="text" placeholder='Last Name'  name='ln' onChange={changeFdata}/> <hr />
//         <button type='submit'>Signup</button>

//       </form>
//     </div>
//   )
// }

// export default Signup

//!  Reaxct Hook Form
// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";


// function Signup() {

//     // let [formData,setFormData]=useState({name:"",mobile:"",pass:"",email:""});

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     let submitForm=(fdata)=>
//     {
//       console.log(fdata);

//     }
//     console.log(errors);


//   return (

//     <form onSubmit={handleSubmit(submitForm)}>

//         <input type="text" placeholder='Name'  {...register("name",{required:{value:true,message:"Name is Mandatory"},
//       minLength:{value:8,message:"Name should Contain minimum 8 characters"},
//       pattern:{value:/^[A-Za-z]+$/,message:"Name Should Contain only Alphabets"},
//       maxLength:{value:10,message:"Name Should not Exceed more than 10 chracters"}
//      })}/>

//       <div style={{color:"red"}}>
//         {errors.name?.message}
//       </div>
//        <hr />


//         <input type="tel" placeholder='Mobile'  {...register("mobile",{required:{value:true,message:"Mobile is Mandatory"},
//       pattern:{value:/^[6-9][0-9]{9}$/,message:"Enter Proper Mobile Number"}})} />

//   <div  style={{color:"red"}}>
//         * {errors.mobile?.message}
//       </div>
//        <hr />

//        <hr />


//         <input type="password" placeholder='Password'  {...register("pass",{required:{value:true,message:"Password is Mandatory"},
//       pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}})} />
//       <div  style={{color:"red"}}>
//      {errors.pass?.message}
//       </div>
//        <hr />


//         <input type="email" placeholder='Email'  {...register("email",{required:{value:true,message:"Email is Mandatory"}})} /> <hr />

//         <button type='submit'>Signup</button>

//     </form>
//   )
// }

// export default Signup

//! Form Validation without using Library

import React, { useState } from 'react'

function Signup() {
  let [fdata, setFdata] = useState({ name: "", pass: "", email: "" });
  let [formerrors, setFormerrors] = useState({})



  //! Changing input
  let changeFdata = ({ target: { value, name } }) => {
    setFdata({ ...fdata, [name]: value })
  }


  //! Sending form data
  let sendFadata = (e) => {
    setFormerrors(validatForm(fdata));
    e.preventDefault()
  }


  //! Validate Function
 
    let validatForm = (formvalues) => {
    let errors = {};

    //! Name Validation
    if (!formvalues.name) 
    {
      errors.nameErrorMessage = "Name is Mandatory"
    }
    else if(formvalues.name.length<8)
    {
      errors.nameErrorMessage = "Name should Contain Minimum 8 characters"
    }
    else if(formvalues.name.length>10)
    {
      errors.nameErrorMessage = "Name should not exceed more than 10 characters"
    }
    else if(!(/^[A-Za-z]+$/.test(formvalues.name)))
    {
      errors.nameErrorMessage = "Name should contain only Alphabets"
    }


    //! Password Validation
    if (!formvalues.pass) 
    {
      errors.passErrorMessage = "Password is Mandatory"
    }
    else if(formvalues.pass.length<8)
    {
      errors.passErrorMessage = "Password should Contain Minimum 8 characters"
    }
    else if(formvalues.pass.length>10)
    {
      errors.passErrorMessage = "Password should not exceed more than 10 characters"
    }
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formvalues.pass)))
    {
      errors.passErrorMessage = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    }


    return errors;
  }

console.log(formerrors);
  return (
    <div>
      <form onSubmit={sendFadata}>
        <input type="text" placeholder='Name' name='name' onChange={changeFdata} /> 
        <div style={{color:"red"}}>
        {formerrors.nameErrorMessage}
        </div>
        <hr />
        <input type="text" placeholder='Password' name='pass' onChange={changeFdata} />
        <div style={{color:"red"}}>
        {formerrors.passErrorMessage}
        </div> <hr />
        <input type="email" placeholder='Email' name='email' onChange={changeFdata} /> <hr />

        <button type='submit'>Signup</button>

      </form>
    </div>
  )
}

export default Signup