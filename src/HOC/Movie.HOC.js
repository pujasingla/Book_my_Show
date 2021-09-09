//HOC-> Higher Order components
//Transforms component into anoother components
//Adding additonal functionalities to the exiting components

import React from "react";
import { Route } from "react-router-dom";

//layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component, ...rest}) => {
  //components
  //props -> path exact
  return (
    <>
    <Route
     {...rest}

     component = {(props) => (
       <MovieLayout>
       <Component {...props}/>
       </MovieLayout>
     )

     }
     />
    </>
  )
};

export default MovieHOC;
