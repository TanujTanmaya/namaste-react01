import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //So in this function we will return the online status of the person by using an given event window.online()

    const[onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{

        window.addEventListener('offline',()=>{
                setOnlineStatus(false);
        });

        window.addEventListener('online',()=>{
            setOnlineStatus(true);
    });

    },[])




  return onlineStatus;
};

export default useOnlineStatus;
