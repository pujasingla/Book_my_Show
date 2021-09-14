import React from "react";
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component.js";
const Plays = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="w-full lg:flex lg:flex-row-reverse">
        <div className="lg:w-8/12">
        <h2 className="text-2xl font-bold mb-4">Plays in Chandigarh</h2>
        <div className=" flex flex-wrap">
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>
        <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
        <Poster
          src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
          title="Tvk Cultural presents Ponniyin Selvan"
          subtitle="Tamil ₹300"
          />
        </div>

      </div>

      </div>

        <div className="lg:w-72 lg:mr-16">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <div className=" bg-gray-50 rounded-md shadow p-4 text-sm mb-4">
            <PlaysFilter title="Date" tags={["Today","Tomorrow","This Weekend"]} />
            </div>
            <div className=" bg-gray-50 rounded-md shadow p-4 text-sm mb-4">
            <PlaysFilter title="Language" tags={["Tamil","Hindi","Kannada"]} />
            </div>
            <div className=" bg-gray-50 rounded-md shadow p-4 text-sm mb-4">
            <PlaysFilter title="Categories" tags={["Theatre"]} />
            </div>
            <div className=" bg-gray-50 rounded-md shadow p-4 text-sm mb-4">
            <PlaysFilter title="Genre" tags={["Drama","Adaptation","Historical","Thriller", "Online Streaming Plays"]} />
            </div>
            <div className=" bg-gray-50 rounded-md shadow p-4 text-sm mb-4">
            <PlaysFilter title="More Filters" tags={["Online Streaming","Kids Allowed","Outdoor"]} />
            </div>
            <div className=" bg-gray-50 rounded-md shadow p-4 text-sm mb-4">
            <PlaysFilter title="Price" tags={["Free","0-500","501-200","Above 2000"]} />
            </div>
        </div>
        </div>
      </div>

    </div>
    </>
  )
};
export default Plays;
