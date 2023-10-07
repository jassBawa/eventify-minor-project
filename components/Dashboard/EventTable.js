// package imports
import React from "react";
import exportFromJSON from "export-from-json";
import { useDispatch } from "react-redux";

// local imports
import { openModal } from "@/store/slices/modalSlice";
import { formatDate } from "@/utils/date-formatters";
import { deleteEvent, getRegisteredUsers } from "@/services/api";

const exportType = "csv";

function EventTable({ filterList }) {
  const dispatch = useDispatch();

  const handleDownload = async (eventId) => {
    const data = await getRegisteredUsers(eventId);
    exportFromJSON({ data, eventId, exportType });
  };

  const handleDelete = async (eventId) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await deleteEvent(eventId, token);
      if (response.message) {
        toast.success("Event deleted");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleEdit = async (eventId) => {
    const event = filterList.find((event) => event._id === eventId);
    dispatch(
      openModal({
        operationType: "UPDATE",
        modalData: {
          eventName: event.eventName,
          description: event.description,
          image: event.image,
          date: event.date,
          time: event.time,
          venue: event.venue,
          eventId: event._id,
        },
      })
    );
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
            Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Response
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {filterList.map((event, _i) => {
          const formattedDate = formatDate(event.date);

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
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium ">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => handleDownload(event._id)}
                >
                  Download
                </button>
              </td>
              <td className="">
                <button
                  href="#"
                  className="ml-4 text-gray-600 hover:text-indigo-900"
                  onClick={() => handleEdit(event._id)}
                >
                  <svg
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M25.8478 0.569314C26.2124 0.204782 26.7069 0 27.2225 0C27.7381 0 28.2326 0.204782 28.5973 0.569314L34.4307 6.40272C34.7952 6.76736 35 7.26185 35 7.77745C35 8.29306 34.7952 8.78755 34.4307 9.15219L16.9305 26.6524C16.5659 27.0171 16.0714 27.222 15.5557 27.2221H9.72234C9.20663 27.2221 8.71205 27.0173 8.34739 26.6526C7.98273 26.288 7.77787 25.7934 7.77787 25.2777V19.4443C7.77798 18.9286 7.98292 18.4341 8.3476 18.0695L25.8478 0.569314ZM11.6668 20.2493V23.3332H14.7507L30.3065 7.77745L27.2225 4.69353L11.6668 20.2493ZM0 7.77745C0 6.74605 0.409726 5.75688 1.13904 5.02756C1.86836 4.29825 2.85753 3.88852 3.88894 3.88852H13.6113C14.127 3.88852 14.6216 4.09338 14.9862 4.45804C15.3509 4.8227 15.5557 5.31728 15.5557 5.83299C15.5557 6.34869 15.3509 6.84327 14.9862 7.20793C14.6216 7.57259 14.127 7.77745 13.6113 7.77745H3.88894V31.1111H27.2225V21.3887C27.2225 20.873 27.4274 20.3784 27.7921 20.0138C28.1567 19.6491 28.6513 19.4443 29.167 19.4443C29.6827 19.4443 30.1773 19.6491 30.542 20.0138C30.9066 20.3784 31.1115 20.873 31.1115 21.3887V31.1111C31.1115 32.1425 30.7018 33.1316 29.9724 33.861C29.2431 34.5903 28.254 35 27.2225 35H3.88894C2.85753 35 1.86836 34.5903 1.13904 33.861C0.409726 33.1316 0 32.1425 0 31.1111V7.77745Z"
                      fill="#3C3C3C"
                    />
                  </svg>
                </button>
                <button
                  href="#"
                  className="ml-8 text-red-600 hover:text-indigo-900"
                  onClick={() => handleDelete(event._id)}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 3.5C8.75 2.57174 9.11875 1.6815 9.77513 1.02513C10.4315 0.368749 11.3217 0 12.25 0H22.75C23.6783 0 24.5685 0.368749 25.2249 1.02513C25.8813 1.6815 26.25 2.57174 26.25 3.5V7H33.25C33.7141 7 34.1592 7.18437 34.4874 7.51256C34.8156 7.84075 35 8.28587 35 8.75C35 9.21413 34.8156 9.65925 34.4874 9.98744C34.1592 10.3156 33.7141 10.5 33.25 10.5H31.3792L29.862 31.7485C29.7991 32.6315 29.404 33.4579 28.7562 34.0613C28.1084 34.6646 27.256 35 26.3708 35H8.6275C7.74224 35 6.88987 34.6646 6.24205 34.0613C5.59423 33.4579 5.1991 32.6315 5.13625 31.7485L3.6225 10.5H1.75C1.28587 10.5 0.840752 10.3156 0.512563 9.98744C0.184374 9.65925 0 9.21413 0 8.75C0 8.28587 0.184374 7.84075 0.512563 7.51256C0.840752 7.18437 1.28587 7 1.75 7H8.75V3.5ZM12.25 7H22.75V3.5H12.25V7ZM7.1295 10.5L8.62925 31.5H26.3725L27.8723 10.5H7.1295Z"
                      fill="#DA3C3C"
                    />
                  </svg>
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
