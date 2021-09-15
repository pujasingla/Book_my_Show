import React from "react";
//props - > src,title,subtitile
const MovieCast = (props) => {
  return (
    <>
    <div className="flex flex-col items-center gap-2 px-3 h-full w-full">
      <div className="">
      <img src={props.src} alt ={props.title} className="w-30 h-30 rounded-full"/>
      </div>
      <h3
      className = {`text-lg text-gray-900`}>
      {props.title}
      </h3>
      <p
      className = {`text-sm text-gray-500 `}
      >{props.subtitle}
      </p>
    </div>
    </>
  )

};

export default MovieCast;
