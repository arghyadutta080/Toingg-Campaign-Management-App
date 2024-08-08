import React from "react";
import { FaEye } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

type CampaignElementProps = {
  id: string;
  campaign: Object | any;
};

const CampaignElement: React.FC<CampaignElementProps> = ({ id, campaign }) => {
  return (
    <div className="text-white w-full flex flex-row bg-zinc-900 px-3 py-2 rounded-lg">
      <span className="w-1/2 text-zinc-300">{campaign?.title}</span>
      <div className="w-1/2 flex flex-row justify-around text-zinc-300">
        <button className=" text-blue-300 flex flex-row space-x-2 justify-center items-center">
          <FaEye size={20} />
          <span>View</span>
        </button>
        <button className=" text-green-300 flex flex-row space-x-2 justify-center items-center">
          <BiSolidPhoneCall size={20} />
          <span>make a call</span>
        </button>
        <button className=" text-red-500 flex flex-row space-x-2 justify-center items-center">
          <MdDelete size={20} />
          <span>delete</span>
        </button>
      </div>
    </div>
  );
};

export default CampaignElement;
