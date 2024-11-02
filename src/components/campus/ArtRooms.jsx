import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider';

const ArtRooms = () => {
    const data = useContext(siteContext);
    const artRoomsPic=data?.infrastructure?.artRooms;
    console.log(artRoomsPic,"campus")
  return (
    <>
    {artRoomsPic?.map((pic,i)=>
    <div className="w-[240px] h-[180px] mt-14" key={i}>
    <img src={pic.url} alt={i} className="w-[100%] h-[100%] object-cover rounded-xl" />
</div>
)}
    </>
  )
}

export default ArtRooms