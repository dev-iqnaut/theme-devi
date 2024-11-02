
import React from "react";


const GalleryCard = ({img}) => {
 
 
  //upload images into firebase storage

  
  return (
    <>
     
          <div className="w-[300px] h-[230px]">
            <img src={img.url} alt={img.id} className="w-[100%] h-[100%] object-cover rounded-md" />
          </div>
       
    </>
  );
};

export default GalleryCard;
