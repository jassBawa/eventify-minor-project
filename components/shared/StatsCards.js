import { CategoryIcon, EventIcon, RegistrationIcon } from "@/assets/Icons";
import React from "react";

function StatsCards({ totalEvents, totalRegistrations }) {
  const data = [
    {
      card_title: "Total Events",
      card_data: totalEvents,
      card_dummyLine: "Total events you have created till now!",
      card_icon: <EventIcon className="absolute right-10 h-20 w-20 " />,
      card_gradient: "from-[#2193b0] to-[#6dd5ed]",
    },
    {
      card_title: "Total Registrations",
      card_data: totalRegistrations,
      card_dummyLine: "Participants in every event you've hosted",
      card_icon: <RegistrationIcon className="absolute right-10 h-20 w-20 " />,
      card_gradient: "from-[#B79891] to-[#94716B]",
    },
    {
      card_title: "Total Categories",
      card_data: "8",
      card_dummyLine: "Categories currently in our support",
      card_icon: <CategoryIcon className="absolute right-10 h-20 w-20 " />,
      card_gradient: "from-[#a8c0ff] to-[#3f2b96]",
    },
  ];

  return (
    <div className="flex gap-12">
      {data.map((item, _) => (
        <React.Fragment key={_}>
          <div
            className={`relative text-gray-200 bg-gradient-to-tr py-8 px-6 flex-1 rounded 
              ${item.card_gradient}`}
          >
            {item.card_icon}
            <h4 className="">{item.card_title}</h4>
            <p className="card__data mt-2 text-6xl text-white">
              {item.card_data}
            </p>
            <p className="bottom__text mt-6">{item.card_dummyLine}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default StatsCards;
