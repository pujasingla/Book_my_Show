import React from "react";
import {BiShareAlt} from "react-icons/bi";
import {BsHeartFill} from "react-icons/bs";


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

const MovieHero = () => {
  return (
    <>
    <div className="md:hidden" style={{height: "calc(180vw)"}}>
      <img
        src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
        alt="poster"
      />
    </div>


    <div className="hidden md:block lg:hidden">
    <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
      alt="poster"
    />
    </div>


    <div className="relative hidden lg:block" style={{height: "32rem"}}>

      <div className="absolute h-full w-full z-10"
      style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
      />


    <div className="absolute border-0 border-white flex flex-row z-30 left-64 top-10 gap-10 w-4/5">
    <div className="w-64 h-96">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className="h-full w-full rounded-xl"
          />
    </div>
    <div className="flex flex-col text-white gap-5 w-2/5">
          <div>
            <h2 className="font-bold text-4xl">Shang-Chi and the Legend of the Ten Rings</h2>
          </div>
          <div className="">
            <h3 className="flex flex-row items-center gap-2" >
              <BsHeartFill className="text-red-500 text-xl"/>
              <span className="text-xl font-bold">91%  </span>
               38.9K ratings >
              </h3>

          </div>


          <div className="relative flex flex-row items-center mr-24 bg-gray-800 rounded-md bg-opacity-75 p-3">
            <div className="flex flex-col">
              <h2 className="font-bold">Add your rating & review</h2>
              <h3>Your ratings matter</h3>
            </div>
            <div className="absolute bg-white z-10 rounded-md right-5 p-1">
              <h1 className="text-black text-xl">Rate now</h1>
            </div>

          </div>

          <div className="flex flex-col gap-2">
          <h2 className="pl-2 bg-gray-200 rounded font-bold text-black mr-64">2D, 3D, MX4D, 4DX, IMAX 2D </h2>
          <h2 className="pl-2 bg-gray-200 rounded font-bold text-black mr-24 ">English, Tamil, Hindi, Telugu, Malayalam, Kannada</h2>
          </div>
          <div>
          <h3>
            2h 12m ??? Action Adventure Fantasy  UA??? 3 Sep, 2021
          </h3>
        </div>
        <div className="flex items-center">
          <button onClick={launchRazorPay} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
           Book tickets
         </button>
        </div>
    </div>
    <div className="text-gray-300 bg-gray-900 flex flex-row gap-3 w-30 p-5 ml-64 items-center rounded h-12 text-xl bg-opacity-50">
      <BiShareAlt className="text-2xl"/>
      <h2>Share</h2>
    </div>



      </div>
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className="w-full h-full"
        />
    </div>


    </>

  )
};

export default MovieHero;
