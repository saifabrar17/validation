import React from "react";

const Input = ({
  lableName,
  type,
  name,
  className = "shadow border rounded w-full py-2 px-3 text-gray-700",
  value,
  onChange,
  errorState,
}) => {
  return (
    <div className="pb-3">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {lableName}
      </label>
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
      />
      {errorState && (
        <span className="text-red-500 text-base">{errorState}</span>
      )}
    </div>
  );
};

export default Input;
