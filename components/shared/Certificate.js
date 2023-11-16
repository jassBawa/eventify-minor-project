import React from "react";

function Certificate({
  name = "John Doe BAWA",
  date = "12 November 2023",
  societyName = "Cultural Committee",
  eventName = "FOLK DANCE",
}) {
  return (
    <div
      id="user-certificate"
      class="certificate cert-body relative overflow-hidden"
    >
      <div className="absolute top-0 right-0">
        <img src="border-cert.png" alt="Border" className="" />
      </div>
      <div class="cert-header mt-16">
        <h1 className="text-3xl">Certificate of Participation</h1>
        <img
          src="/gndec.png"
          alt="Certificate Icon"
          className="w-40 h-40 mx-auto"
        />
      </div>
      <div class="cert-content">
        <p>This is to certify that</p>
        <h2 id="name" className="font-serif my-2 text-5xl text-blue-900">
          {name}
        </h2>
        <p>has successfully participated in the event</p>
        <h3 id="event" className="font-semibold">
          {eventName}
        </h3>
        <h3 id="date" className="">
          held on {date}
        </h3>
      </div>
      <div class="cert-footer ">
        <h4 className="text-md">Event Coordinator</h4>
        <h3 className="text-2xl text-blue-600"> {societyName}</h3>
      </div>
    </div>
  );
}

export default Certificate;
