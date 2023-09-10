import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email,password} =data
    try{
      const{data}= await  axios.post('/login',{
        email,
        password
      });
      if(data.error)
      {
        toast.error(data.error)
      }else{
        setData({});
        navigate('/')
      }

    } catch (error){

    }
  }
}
const loginUser = () => {
  return (
    <div>Register</div>
  )
}



