import React, { ChangeEvent } from "react";

type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  onChange: (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  options?: string[];
};

const InputComponent: React.FC<InputProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  options,
  checked
}) => {
  return (
    <div className="my-4">
      <label className="block text-gray-400 mb-2">
        {type !== "checkbox" && label}
      </label>

      {/* Text Input */}
      {type === "text" && (
        <input
          type="text"
          name={name}
          value={typeof value === "string" ? value : ""}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded w-full text-black"
        />
      )}

      {/* Textarea Input */}
      {type === "textarea" && (
        <textarea
          name={name}
          value={typeof value === "string" ? value : ""}
          placeholder={placeholder}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded w-full text-black"
          rows={5} // You can adjust the number of rows as needed
        />
      )}

      {/* Select Input */}
      {type === "select" && options && (
        <select
          name={name}
          value={typeof value === "string" ? value : ""}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded w-full text-black"
        >
          <option value="" disabled>
            Select
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {/* Date-Time Input */}
      {type === "datetime" && (
        <input
          type="datetime-local"
          name={name}
          value={typeof value === "string" ? value : ""}
          onChange={onChange}
          className="border border-gray-300 p-2 rounded w-full text-black"
        />
      )}

      {/* Checkbox Input */}
      {type === "checkbox" && (
        <div className="flex flex-row justify-start space-x-3 items-center">
          <label className="block text-gray-400">
            {label}
          </label>
          <input
            type="checkbox"
            name={name}
            checked={checked || false}
            onChange={onChange}
            className="mr-2 leading-tight flex flex-row h-4 w-4"
          />
        </div>
      )}

      {/* Object Key-Value Pair Input (Conditional on Checkbox) */}
      {/* {type === "keyValue" && typeof value === "object" && (
        <div>
          {Object.entries(value).map(([key, val], index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Key"
                value={key}
                onChange={(e) =>
                  onChange({
                    ...e,
                    target: {
                      ...e.target,
                      value: { ...value, [e.target.value]: val },
                      name: `${name}[${index}]`,
                    },
                  })
                }
                className="border border-gray-300 p-2 rounded w-1/2 text-black mr-2"
              />
              <input
                type="text"
                placeholder="Value"
                value={val}
                onChange={(e) =>
                  onChange({
                    ...e,
                    target: {
                      ...e.target,
                      value: { ...value, [key]: e.target.value },
                      name: `${name}[${index}]`,
                    },
                  })
                }
                className="border border-gray-300 p-2 rounded w-1/2 text-black"
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default InputComponent;
