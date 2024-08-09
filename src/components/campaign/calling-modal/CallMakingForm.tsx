"use client";

import { creatCalls } from "@/api/calling";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

type FormProps = {
  campID: string;
};

type CallElement = {
  id: number;
  name: string;
  phoneNumber: string;
};

const CallMakingForm: React.FC<FormProps> = ({ campID }) => {
  const [calls, setCalls] = useState<CallElement[]>([
    {
      id: 1,
      name: "",
      phoneNumber: "",
    },
  ]);
  const maxInputs = 5;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target;
    const newCalls = calls.map((call) =>
      call.id === id ? { ...call, [name]: value } : call
    );
    setCalls(newCalls);
  };

  const addInput = () => {
    if (calls.length < maxInputs) {
      setCalls([...calls, { id: calls.length + 1, name: "", phoneNumber: "" }]);
    } else {
      toast.error(`You can only add up to ${maxInputs} inputs.`);
    }
  };

  const removeInput = (id: number) => {
    const newCalls = calls.filter((call) => call.id !== id);
    setCalls(newCalls);
  };

  const makeCall = async () => {
    calls.map(async (call) => {
      if (call.name === "" || call.phoneNumber === "" || call.phoneNumber.length !== 10) {
        toast.error("Please fill all the fields properly.");
      
    } else {
        const response = await creatCalls({     // Make the call
          name: call.name,
          phoneNumber: call.phoneNumber,
          campID: campID,
        });
        if (!response?.status) {
          toast.error(response?.detail);
        } else {
          toast.error(response?.message);
        }
      }
    });
  };

  return (
    <div className="flex flex-col space-y-3">
      {calls.map((call, index) => (
        <div key={index} className="flex flex-row items-center space-x-2">
          <input
            type="text"
            name="name"
            value={call.name}
            placeholder="Name"
            onChange={(e) => handleChange(e, call.id)}
            className="border border-gray-300 p-2 rounded w-1/2 text-black"
          />
          <input
            type="text"
            name="phoneNumber"
            value={call.phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => handleChange(e, call.id)}
            className="border border-gray-300 p-2 rounded w-1/2 text-black"
          />
          {calls.length > 1 && (
            <button type="button" onClick={() => removeInput(call.id)}>
              <MdDelete size={40} color="#ef4444" />
            </button>
          )}
        </div>
      ))}
      <div className="flex flex-row justify-between pt-5">
        <button
          type="button"
          onClick={addInput}
          className=" self-start border-2 border-blue-300 px-3 py-2 rounded-lg font-medium"
        >
          Add Call
        </button>
        <button
          type="button"
          onClick={makeCall}
          className=" self-start border-2 border-blue-300 px-3 py-2 rounded-lg font-medium"
        >
          Make Call
        </button>
      </div>
    </div>
  );
};

export default CallMakingForm;
