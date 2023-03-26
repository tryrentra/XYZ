import React from 'react';
import {create} from "zustand"
import axios from "axios"
import { useRouter } from "next/router";

let serverurl = "http://localhost:5000" ; 
let authtoken = "";
if (typeof window !== 'undefined') {
    authtoken = localStorage.getItem("auth-token")
}

let config = {
    headers:{
        'Content-Type': 'application/json',
        "auth-token": authtoken
    }
  }

const useAuth = create((set)=>({
    isauthenticate : false,
    userdetail : [],
    logout : ()=>{
        localStorage.removeItem("auth-token")
        window.location.reload()
    },
    fetchuser : () =>{
      const fetchuserapi = async() =>{
    try {
        const res = await axios.post(`${serverurl}/api/auth/fetchuser` , {} , config)
        if(res.data.user != null || "undefined"){
            set(()=>({
                isauthenticate : true
            }))
        }
        set(()=>({
            userdetail : res.data.user ,
        }))
     
        }
        catch (error) {
        console.warn("fetch user failed",error.response)
    }
}
    fetchuserapi();
       
    },

    loginapi : (values) => {
            const loginpost = async()=>{
                try {
                    const res = await axios.post(`${serverurl}/api/auth/login` , values);
                    console.log(res)
                    if(res.data.status == "sucess"){
                        localStorage.removeItem("auth-token")
                        localStorage.setItem("auth-token" , res.data.authtoken)
                        console.log(res.data.userdetail)
                        set(()=>({
                            isauthenticate : true,
                            userdetail : res.data.userdetail
                        }))
                        window.location.href="/";
                        // window.location.href = "/"
                    }
                    else{
                        console.log("error in loignn")
                    }
                } catch (error) {
                    console.warn(error)
                }
            };
            loginpost()
    },

    signupapi : (values) => {
        const signuppost = async()=>{
            try {
                const res = await axios.post(`http://localhost:5000/api/auth/signup` , values);
                // const res = await axios.post(`${serverurl}/api/auth/signup` , values);
                console.log(res.data)
                if(res.data.status == "sucess"){
                    localStorage.removeItem("auth-token")
                    localStorage.setItem("auth-token" , res.data.authtoken)
                    set(()=>({
                        isauthenticate : true,
                        userdetail: res.data.userdetail
                    }))
                    window.location.href="/";
                }
                else{
                    console.log("error in loignn")
                }
            } catch (error) {
                console.log(error)
            }
        };
        signuppost()
        },

}))

export default useAuth;