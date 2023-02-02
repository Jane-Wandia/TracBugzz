import React from'react'
import { useDispatch} from 'react-redux'
import {signIn} from '../controllers/Redux/authSlice'
import './login.css'

export default() =>{
    const dispatch =useDispatch();

    const [formImput,setImput]= usestate({
        name:"",
        password:"",
    })

    function inputChanged(e){
        safeFormInput({
            ...formInput,
        })
    }
    return(
       <div className='login-container'>
        <form ClassName='login-form'>
            <h1>Login</h1>
            <input name ='name' type='text' placeholder='Name' onChange={""} value={}></input>
             <input name ='password'type='password' placeholder='Password' onChange={""} value={}></input>
              <button type='submit' onclick={""}>Login</button>
        </form>
       </div>
    )
}