import {useState} from "react"
import axios from 'axios'
import{toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
export default function Registration()
{
    const navigate =useNavigate()
    const[data,setData] = useState({
        email: '',
        password: '' 
    })
    
    const registerUser  = async(e) => {
         e.PreventDefault()
         const{email,password} = data
         try{
            const {data} = await axios.post('/register',{
                email,password 
            }) 
            if(data.error)
            {
                toast .error(data.error)
            }else{
                setData({})
                toast.success('Login Successfull. Welcome!')
                navigate('/login')
            }
         }
         catch(error) {
            console.log(error)
    }
}
}
