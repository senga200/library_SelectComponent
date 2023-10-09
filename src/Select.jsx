import React from "react";

function Select({ children, options, value, onChange, id, name }) {
  return (
    <div className="selectComponent">
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="">Select in dropdown list</option>
        {children ||
          (options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )))}
      </select>
    </div>
  );
}

export default Select;
