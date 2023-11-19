import React, { useCallback, useState } from "react";
import { giveFeedback } from "@/services/api";
import { StarOutlinedIcon } from "@/assets/Icons";
import Rating from "../shared/Rating";
import { toast } from "react-hot-toast";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleRatingChange = useCallback((newRating) => {
    setRating(newRating);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await giveFeedback({
      rating,
      description,
      email,
    });
    if (res) {
      toast.success(
        "We have recieved your query we will respond as fast as possible!"
      );
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="image">
            <img
              src="/help.jpeg"
              className="absolute h-full w-full left-0 top-0 border-2 object-cover"
            />
          </div>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-lg">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Opp. GNE College, Guru Nanak Colony, Ludhiana, 141011
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                Eventifymanagment@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">62848-45645</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            💡 Show us your ideas!
          </h2>
          <p className="leading-relaxed mb-5 text-sm text-gray-600">
            If you have any specific events or topics that you would like to see
            covered or any ideas on how we can enhance the overall experience,
            please feel free to share them with us.
          </p>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Rate Us
            </label>
            <div className="flex gap-2">
              <Rating rating={rating} onRatingChange={handleRatingChange} />
            </div>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="description"
              className="leading-7 text-sm text-gray-600"
              name="description"
            >
              Suggestion
            </label>
            <textarea
              id="message"
              name="message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Your suggestions are valuable to us as we strive to provide the best
            possible assistance. Thank you for your support!
          </p>
        </form>
      </div>
    </section>
  );
}

export default React.memo(FeedbackForm);
