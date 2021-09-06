import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";


const HomePage=() => {
  return (
    <>
    <div className="flex flex-col gap-10">
    <div className="container mx-auto px-44">
    <h1 className="text-2xl font-bold text-gray-800">
     The Best of Entertainment
     </h1>
    <EntertainmentCardSlider />

    </div>

    <div className="bg-navCol-200 py-16">


      <div className="container mx-auto px-44">
      <div className="flex">
        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
        alt="Rupay"
        className="w-full h-full"
        />
      </div>
      <PosterSlider images = {TempPosters} title="Premier" subtitle="Brand new releases every friday" isDark />
      </div>

    </div>
    </div>

    <div className ="container mx-auto px-44">
    <PosterSlider
    images={TempPosters}
    title="Online Streaming Events"
    isDark={false}
    />
    </div>

    <div className ="container mx-auto px-44">
    <PosterSlider
    images={TempPosters}
    title="Online Events"
    isDark={false}
    />
    </div>

   </>
 );


};

export default HomePage;
