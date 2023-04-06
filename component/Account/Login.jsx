import React, { useEffect, useRef, useState } from 'react'
import style from "./Styles/auth.module.scss"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useAuth from '../../Zustandstore/authStore';
import { useRouter } from 'next/router';
import axios from "axios"

const Login = () => {
  let router = useRouter()
  let api = process.env.NEXT_PUBLIC_API_URL
    const [passtype, setpasstype] = useState("password")
    let nameRef = useRef()
    let passwordref = useRef()
  
    let emailregex = /@gmail.com/
    const handlesubmit = (e)=>{
        e.preventDefault()
        let name = nameRef.current.value;
        let password = passwordref.current.value;

        //validaion function 
          if (password.length !== "" && name !== "") {
            // console.log(data)
            axios.get(`${api}api/login?name=${name}&pass=${password}`).then((e)=>{
              console.log(e.data.user)
              localStorage.setItem("id",e.data.user.name)
              if(e.data.verified === true){
                router.push("/chat")
              }else{
                alert("Wrong username or Password ")
              }
            })
            nameRef.current.value = "";
                  passwordref.current.value = "";
          }
          else{
            console.log("use erro msg that invalid error")
          }
          // router.push("/chat")
    }

  return (
    <div className={style.mainDiv}>
    <form className={style.auth_form} onSubmit={handlesubmit}>
      <h1>login to chato</h1>
        <div className={style.input_box}>
        <input type="text" ref={nameRef} placeholder='Name'/>
        </div>
        <div className={style.input_box}>
        <input type={passtype} ref={passwordref} value="Jicro" placeholder='Password'/>
        <div onClick={()=>{passtype == "password" ? setpasstype("text"):setpasstype("password")}}>
            {passtype == "password"?<VisibilityIcon/>:<VisibilityOffIcon/>}
        </div>
        </div>
        <button>Log in</button>
    </form>
    </div>
  )
}

export default Login
