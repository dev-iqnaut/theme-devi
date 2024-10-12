import React from "react";


const GalleryCard = ({img}) => {

  return (
    <>
     
          <div className="w-[300px] h-[230px]">
            <img src={img.url} alt={img.id} className="w-[100%] h-[100%] object-cover" />
          </div>
       
    </>
  );
};

export default GalleryCard;
