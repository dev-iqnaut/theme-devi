import { doc, getDoc } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'
import db from '../config/firebase';




export const siteContext=createContext();
const SiteContextProvider = ({children}) => {
 
   const[data,setData]=useState([]);

   const getData = async () => {
    try {
      const docRef = doc(db, 'sites','www.edunity.com');
      console.log(docRef) // Replace with your document ID
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())

      if (docSnap.exists()) {
        setData(docSnap.data().siteData); // Access the `siteData` field inside the document
      } else {
        console.log('No such document!');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (

    <siteContext.Provider value={data}>
        {children}
    </siteContext.Provider>
  )
}

export default SiteContextProvider
