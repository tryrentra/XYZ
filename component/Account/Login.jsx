import React, { useEffect, useRef, useState } from 'react'
import style from "./Styles/auth.module.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useAuth from '../../Zustandstore/authStore';
import { useRouter } from 'next/router';


const Login = () => {
  let router = useRouter()
  let {loginapi , userdetail , isauthenticate} = useAuth() 
  
    const [passtype, setpasstype] = useState("password")
    let emailref = useRef()
    let passwordref = useRef()
  
    let emailregex = /@gmail.com/
    const handlesubmit = (e)=>{
        e.preventDefault()
        let email = emailref.current.value;
        let password = passwordref.current.value;
        let data = { email , password}

        //validaion function 
          if (emailregex.test(email) && password.length >= 5) {
                  loginapi(data)
                  // console.log(data)
                  emailref.current.value = "";
                  passwordref.current.value = "";
          }
          else{
            console.log("use erro msg that invalid error")
          }
          router.push("/chat")
    }

  return (
    <div className={style.mainDiv}>
    <form className={style.auth_form} onSubmit={handlesubmit}>
      <h1>login to chato</h1>
        <div className={style.input_box}>
        <input type="text" ref={emailref} placeholder=' email'/>
        </div>
        <div className={style.input_box}>
        <input type={passtype} ref={passwordref} placeholder='password'/>
        <div onClick={()=>{passtype == "password" ? setpasstype("text"):setpasstype("password")}}>
            {passtype == "password"?<VisibilityIcon/>:<VisibilityOffIcon/>}
        </div>
        </div>
        <button>log in</button>
    </form>
    </div>
  )
}

export default Login