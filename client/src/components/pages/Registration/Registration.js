import {useState} from "react"
import axios from 'axios'
import{toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import './styles.css'
import { useGoogleLogin } from "@react-oauth/google";

export default function Registration()
{
    const navigate =useNavigate()
    const[data,setData] = useState({
        email: '',
        password: '' 
    })
    
    const registerUser  = async(e) => {
         e.preventDefault()
         const{email,password} = data
         try{
            const {data} = await axios.post('/register',{
                email,password 
            }) 
            if(data.error)
            {
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Registration Successfull. Welcome!')
                navigate('/login')
            }
         }
         catch(error) {
            console.log(error)
    }
  }

  const googleRegister = useGoogleLogin({
    onSuccess : (response) => {
      console.log(response)
    },
    onFailure: (response) => {
      console.log(response)
    },
    
  })

  return (
    
      <div className="Registration">
        <div className="text1">
          <a>Heal.ai</a>
        </div>
        <div className="text2">
          <a>Welcome to Heal.ai</a>
        </div>
        <div className="text3">
          <a>Enter your credentials to access your account</a>
        </div>
            <button type="button" class="btn btn-primary" onClick={googleRegister}>
            <img src="google  .png" width="20" height="18" alt=""/>Sign Up With Google</button>

         <div class="seperator">
          <hr></hr>OR<hr></hr> </div>
        <div class="form-group">
          
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="  Enter Your Username                                              @joinheal.a" value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}></input>
          <input type="Password" class="form-control2" id="exampleInputpassword1"  placeholder="  Password" value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}></input>
          
          </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">Remember Me </label><a href="#" class="link-dark">Already have an account?</a>
            </div>
        <button type="button" class="btn btn-primary2" onClick={registerUser}>Continue</button>
  </div>
  )
}