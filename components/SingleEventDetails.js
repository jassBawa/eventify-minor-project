import { CalendarIcon, ClockIcon, GlobeIcon, TagIcon } from "@/assets/Icons";
import React from "react";
import FormInput from "./FormInput";
import { formatDate } from "@/utils/date-formatters";
import RegisterForm from "./RegisterForm";

function SingleEventDetails({ event }) {
  const formattedDate = formatDate(event.date)
  return (
    // Details Section
    <section>
      <div className="container mx-auto relative -mt-56 z-10">
        <div className="grid grid-cols-2 gap-24">
          <div className="left">
            <div className="heading">
              <h5 className=" text-yellow-500 tracking-widest">Event Name</h5>
              <h1 className="text-4xl text-white mt-1">{event.eventName}</h1>
            </div>
            <div className=" mt-8 relative bg-[#363636] border-2 border-indigo-500 drop-shadow-lg rounded-3xl">
              {/* <div className="h-full w-full absolute bg-black/40 rounded-3xl" /> */}
              <div className="card py-8 px-8 z-10 relative">
                <h3 className="text-2xl text-gray-300">Event Details</h3>
                <div className="card__items text-white grid grid-cols-2 w-full gap-4 mt-6">
                  <div className="item__group flex gap-4 items-center">
                    <CalendarIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      {formattedDate}
                    </span>
                  </div>
                  <div className="item__group flex gap-4 items-center">
                    <ClockIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      {event.time + ' PM'}
                    </span>
                  </div>
                  <div className="item__group  flex gap-4 items-center">
                    <GlobeIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      {event.venue}
                    </span>
                  </div>
                  <div className="item__group flex gap-4 items-center">
                    <TagIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      Category
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="left__description">
              <h3 className="text-2xl text-white mt-8">Description</h3>
              <p className="text-gray-400 mt-4">
                {event.description}
              </p>
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}

export default SingleEventDetails;
