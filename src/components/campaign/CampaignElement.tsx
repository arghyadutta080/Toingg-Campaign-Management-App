"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Campaign } from "@/lib/types/campaign";
import ViewCampaignModal from "./view-campaign/CampaignModal";
import CallMakingModal from "./calling-modal/CallMakingModal";
import toast from "react-hot-toast";

type CampaignElementProps = {
  id: string;
  campaign: Campaign;
};

const CampaignElement: React.FC<CampaignElementProps> = ({ id, campaign }) => {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openCallModal, setOpenCallModal] = useState(false);

  const onView = () => setOpenViewModal(true);
  const handleCloseView = () => setOpenViewModal(false);

  const onCall = () => setOpenCallModal(true);
  const handleCloseCall = () => setOpenCallModal(false);

  const onDelete = () => {
    toast.error("No permission to perform this action");
  };

  return (
    <div className="text-white w-full flex flex-row items-center bg-zinc-900 px-3 py-2 rounded-lg">
      <span className="w-1/2 text-zinc-300">{campaign?.title}</span>
      <div className="w-1/2 flex flex-row justify-around text-zinc-300">
        <button
          type="button"
          className=" text-blue-300 flex flex-col md:flex-row space-x-2 justify-center items-center"
          onClick={onView}
        >
          <FaEye size={20} />
          <span>View</span>
        </button>
        <button
          type="button"
          className=" text-green-300 flex flex-col md:flex-row space-x-2 justify-center items-center"
          onClick={onCall}
        >
          <BiSolidPhoneCall size={20} />
          <span>make a call</span>
        </button>
        <button
          type="button"
          className=" text-red-500 flex flex-col md:flex-row space-x-2 justify-center items-center"
          onClick={onDelete}
        >
          <MdDelete size={20} />
          <span>delete</span>
        </button>
      </div>
      <ViewCampaignModal
        openModal={openViewModal}
        handleClose={handleCloseView}
        campaign={campaign}
        campaignId={id}
      />
      <CallMakingModal
        openModal={openCallModal}
        handleClose={handleCloseCall}
        campaignId={id}
      />
    </div>
  );
};

export default CampaignElement;
