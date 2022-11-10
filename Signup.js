import React,{useState,useEffect} from 'react';
import  axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Output from './Output'

 function Signup() {
  let navigate = useNavigate();
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    mobileNum:'',
    username:''
   })
   const {name,email,password,mobileNum,username}=data;
   const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler = e=>{
    e.preventDefault(); 
    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',data)
    .then(  (response)=>{
      // history.replace("/").
      navigate("/Output");
        
    }).catch((error)=>{
      console.log(error);
    })
    console.log(data);
   }
  return (
    <div className='signup'>
      <form onSubmit={submitHandler}>
        <div>
        <h1>Submit Profile</h1>
        </div>
        <div>
        <span>Name</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='text' name='name' value={name} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Email</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='email' name='email'value={email} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Password</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='password' name='password' value={password} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>MobileNumber</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='number' name='mobileNum' value={mobileNum  } onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Username</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='username' name='username' value={username} onChange={changeHandler}/>
        </div>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Signup;