import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'
import db from '../config/firebase';




export const siteContext=createContext();
const SiteContextProvider = ({children}) => {
 
   const[data,setData]=useState([]);

   const getData=async()=>{
    try{
  const res=(await getDocs(collection(db,"sites"))).docs.map((doc)=>({
    ...doc.data()
  }))
  setData(res[0].siteData)
    }catch(e){
        console.error(e)
    }
   }
  
   useEffect(()=>{
  getData()
   },[])


  return (

    <siteContext.Provider value={data}>
        {children}
    </siteContext.Provider>
  )
}

export default SiteContextProvider
