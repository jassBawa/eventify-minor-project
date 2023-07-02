import React from "react";

function FormInput({
  label = "Label",
  placeholder = "Placeh holder",
  name = "id",
}) {
  return (
    <div className="relative">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        type="email"
        required
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default FormInput;
