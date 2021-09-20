import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import MovieCast from "../components/MovieCast/MovieCast.component";
import {BiCameraMovie} from "react-icons/bi";

 const launchRazorPay = () => {
  let options = {
    key: "rzp_test_xfF7rpzlSnjH4l",
    amount:500,
    currency:"INR",
    name:"Book My Show Clone",
    description:"Movie Purchase on Rental",
    image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler:()=>{
      alert("Payment Done")
    },
    theme: {color:"#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return (
    <>
    <MovieHero />
    <div className="my-12 container mx-auto px-4 lg:w-2/5 lg:ml-64">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
        <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
      </div>

    <div className="my-8">
    <hr />
    </div>

    <div className="flex flex-col items-start gap-3">
      <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>

      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed rounded-md p-3 border-2 w-96">
          <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
          </div>
      </div>
    </div>

    <div className="my-8">
      <hr />
    </div>

    <div className="my-8">
        <h1 className="text-gray-800 font-bold text-2xl">Cast</h1>
    </div>
    <div className="flex flex-row">

      <MovieCast
        src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg"
        title="Awakwafina"
        subtitle="as katy"
        />

      <MovieCast
        src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg"
        title="Michelle Yeoh"
        subtitle="as Jiang Nan"
        />
      <MovieCast
          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg"
          title="Tony Leung"
          subtitle="as Wenwu"
          />
        <MovieCast
            src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg"
            title="Simu Liu"
            subtitle="as Shang-Chi"
          />
    </div>

    <div className="my-8">
      <hr />
    </div>


    <div className="my-8">
        <h1 className="text-gray-800 font-bold text-2xl">Crew</h1>
    </div>
    <div className="flex flex-row">

      <MovieCast
        src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg"
        title="Destin Cretton"
        subtitle="Director"
      />
      <MovieCast
        src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg"
        title="Kevin Feige"
        subtitle="Producer"
      />
      <MovieCast
        src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg"
        title="Jonathan"
        subtitle="Producer"
      />
      <MovieCast
        src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg"
        title="Bill Pope"
        subtitle="Cinematographer"
      />

    </div>
    <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
     Book tickets
   </button>

    </div>
    </>
  );
};

export default Movie;
