import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/Poster.component";
//config
import settings from "../../config/PosterCarousal.config";
//Image
import PremierImages from "../../config/TempPosters.config";

export const Premier =() => {
/*  const settings ={
    infinite:true,
    autoplay:false,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0
  };

  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg" ,
      alt: "Conjuring",
      title: "The Conjuring : The Devil",
      subtitle:"Horror/Thriller"
    }
  ]
*/

  return (
    <>
    <div className="flex flex-col items-start">
    <h3 className="text-white text-xl font-bold">Premiers</h3>
    <p className="text-white text-sm py-4"> Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
    {PremierImages.map((image) => (
      <Poster {...image} isDark/>
    ))}
    </Slider>
    </>
  )
};


export default Premier;
