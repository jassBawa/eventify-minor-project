import React from "react";

function SingleEventDetails() {
  return (
    // Details Section
    <section>
      <div className="container mx-auto relative -mt-56 z-10">
        <div className="grid grid-cols-2">
          <div className="left">
            <div className="heading">
              <h5 className=" text-yellow-500 tracking-widest">Fine Arts</h5>
              <h1 className="text-4xl text-white mt-1">Art Exhibition</h1>
            </div>

            <div className=" mt-8 relative bg-[#363636] border-2 border-yellow-300 drop-shadow-lg rounded-3xl">
              {/* <div className="h-full w-full absolute bg-black/40 rounded-3xl" /> */}
              <div className="card py-8 px-8 z-10 relative">
                <h3 className="text-2xl text-gray-300">Event Details</h3>
                <div className="card__items grid grid-cols-2 w-full gap-4 mt-8">
                  <div className="item__group text-white/60 flex gap-4 items-center">
                    <span className="item__icon">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H3C1.34315 2 0 3.34315 0 5V19C0 20.6569 1.34315 22 3 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2H15V1ZM18 8V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4H3C2.44772 4 2 4.44772 2 5V8H18ZM2 10H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V10Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                    <span className="item__placeholder opacity-80">
                      Jan 27, 2021
                    </span>
                  </div>
                  <div className="item__group text-white/60 flex gap-4 items-center">
                    <span className="item__icon">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H3C1.34315 2 0 3.34315 0 5V19C0 20.6569 1.34315 22 3 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2H15V1ZM18 8V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4H3C2.44772 4 2 4.44772 2 5V8H18ZM2 10H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V10Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                    <span className="item__placeholder opacity-80">
                      Jan 27, 2021
                    </span>
                  </div>
                  <div className="item__group text-white/60 flex gap-4 items-center">
                    <span className="item__icon">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H3C1.34315 2 0 3.34315 0 5V19C0 20.6569 1.34315 22 3 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2H15V1ZM18 8V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4H3C2.44772 4 2 4.44772 2 5V8H18ZM2 10H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V10Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                    <span className="item__placeholder opacity-80">
                      Jan 27, 2021
                    </span>
                  </div>
                  <div className="item__group text-white/60 flex gap-4 items-center">
                    <span className="item__icon">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H3C1.34315 2 0 3.34315 0 5V19C0 20.6569 1.34315 22 3 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2H15V1ZM18 8V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4H3C2.44772 4 2 4.44772 2 5V8H18ZM2 10H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V10Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                    <span className="item__placeholder opacity-80">
                      Jan 27, 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
}

export default SingleEventDetails;
