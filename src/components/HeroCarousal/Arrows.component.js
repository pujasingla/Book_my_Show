import React from "react";

export const NextArrow = (props) => {
  //const {className, style, onClick}= props;
  return (
    <>
    <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "gray", height:42, opacity:"0.5", width:50}}
    onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
    <div
    className={props.className}
    style={{ ...props.style, backgroundColor: "gray",opacity:"0.5", height:42,width:50}}
    onClick={props.onClick}/>
    </>
  );

};
