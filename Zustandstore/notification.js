import {create} from "zustand"

const useNotification = create(()=>({
    notificationdata : [
        {
            id:1,
            message:"welcome to legcy todo web app",
            datetime : "thursday 23 sep"
        }
    ],
    notificationapi : ()=>{
        console.log("notification api")
    }
}))

export default useNotification;