import { getRegisteredUsers } from "@/services/api";
import exportFromJSON from "export-from-json";
import React from "react";

function EventTable({ filterList }) {
  const exportType = "csv";

  const ExportToExcel = (data, fileName) => {
    exportFromJSON({ data, fileName, exportType });
  };
  const handleDownload = async (eventId) => {
    console.log(eventId);
    const data = await getRegisteredUsers(eventId);
    ExportToExcel(data, eventId);
  };
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Venue
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Registerations
          </th>
          {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {filterList().map((event, _i) => {
          return (
            <tr key={_i}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={event.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {event.eventName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{event.venue}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {event.time}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium ">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => handleDownload(event._id)}
                >
                  Download
                </button>
                {/* <a href="#" className="text-red-600 hover:text-red-900 ml-2">Delete</a> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default EventTable;
