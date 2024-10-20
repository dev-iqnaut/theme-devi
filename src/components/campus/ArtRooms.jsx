import React, { useContext } from 'react'
import { siteContext } from '../../context/SiteContextProvider';

const ArtRooms = () => {
    const data = useContext(siteContext);
    const artRoomsPic=data?.Infrastructure?.art_rooms;
    console.log(artRoomsPic)
  return (
    <>
    {artRoomsPic?.map((pic,i)=>
    <div className="w-[240px] h-[180px] mt-4" key={i}>
    <img src={pic} alt={i} className="w-[100%] h-[100%] object-cover" />
</div>
)}
    </>
  )
}

export default ArtRooms