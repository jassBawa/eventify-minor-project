import { CalendarIcon, ClockIcon, GlobeIcon, TagIcon } from "@/assets/Icons";
import React from "react";
import FormInput from "./FormInput";

function SingleEventDetails() {
  return (
    // Details Section
    <section>
      <div className="container mx-auto relative -mt-56 z-10">
        <div className="grid grid-cols-2 gap-24">
          <div className="left">
            <div className="heading">
              <h5 className=" text-yellow-500 tracking-widest">Fine Arts</h5>
              <h1 className="text-4xl text-white mt-1">Event Title</h1>
            </div>
            <div className=" mt-8 relative bg-[#363636] border-2 border-indigo-500 drop-shadow-lg rounded-3xl">
              {/* <div className="h-full w-full absolute bg-black/40 rounded-3xl" /> */}
              <div className="card py-8 px-8 z-10 relative">
                <h3 className="text-2xl text-gray-300">Event Details</h3>
                <div className="card__items text-white grid grid-cols-2 w-full gap-4 mt-6">
                  <div className="item__group flex gap-4 items-center">
                    <CalendarIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      Jan 27, 2021
                    </span>
                  </div>
                  <div className="item__group flex gap-4 items-center">
                    <ClockIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      10:30am - 2pm
                    </span>
                  </div>
                  <div className="item__group  flex gap-4 items-center">
                    <GlobeIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      Room G-17
                    </span>
                  </div>
                  <div className="item__group flex gap-4 items-center">
                    <TagIcon className="h-5 w-5" />
                    <span className="item__placeholder opacity-60">
                      Fine Arts Category
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="left__description">
              <h3 className="text-2xl text-white mt-8">Description</h3>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptas, quia, voluptate quas voluptates quibusdam
                voluptatum quae quidem quos natus. Quisquam, quae. Quisquam
                voluptates, quae, quod, quibusdam quia voluptatum quas
                voluptatibus quos quidem quae quibusdam quia voluptatum quas
              </p>
            </div>
          </div>

          <form action="">
            <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-indigo-900 text-xl uppercase   font-medium title-font">
                Register Now
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Please fill the form below to register for the event
              </p>
              <div className="grid grid-cols-2 gap-4">
                <FormInput label="Name" placeholder="John Doe" name="name" />
                <FormInput
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  name="email"
                />
                <FormInput
                  label="Phone"
                  placeholder="1234567890"
                  name="phone"
                />
                <FormInput label="Year" placeholder="D1" name="year" />
                <FormInput label="Branch" placeholder="CSE" name="branch" />
                <FormInput label="Section" placeholder="B1" name="section" />
              </div>
              <p className="text-xs text-gray-500 mt-3">
                By filling out this form and clicking submit you acknowledge our
                privacy policy
              </p>
              <button
                type="submit"
                className="text-white mt-6 uppercase py-4 bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SingleEventDetails;
