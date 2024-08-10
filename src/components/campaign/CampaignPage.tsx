"use client";

import React, { useEffect, useRef, useState } from "react";
import { getCampaigns } from "@/api/campaign";
import { IoMdAddCircle } from "react-icons/io";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import CampaignList from "./CampaignList";
import FormModal from "./campaign-form/FormModal";

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchedData = useRef(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    const getCampaignData = async () => {
      try {
        const data = await getCampaigns();
        if (!data?.status) {
          toast.error(data?.detail);
          setLoading(false);
        } else {
          setCampaigns(data?.result);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Failed to fetch campaigns.");
        setLoading(false);
      }
    };

    if (!fetchedData.current) {
      getCampaignData();
      fetchedData.current = true;
    }
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between items-center mx-3 my-3 md:mx-10 md:my-5">
        <h1 className=" text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-300 text-left font-sans font-bold">
          Manage Campaigns
        </h1>
        <div onClick={handleOpen} className="text-white cursor-pointer">
          <IoMdAddCircle size={40} color="#93c5fd" />
        </div>
      </div>

      <h2 className="text-neutral-300 max-w-full mx-3 my-3 md:mx-10 md:my-5 text-sm md:text-lg text-left">
        This page is for managing your campaigns. You can create, modify, view,
        and update your campaigns here.
      </h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <ReactLoading
            type="spin"
            color="#18181b"
            height={"30%"}
            width={"30%"}
            className="py-6 md:py-10"
          />
        </div>
      ) : (
        <CampaignList campaigns={campaigns} />
      )}
      <FormModal openModal={openModal} handleClose={handleClose} />
    </div>
  );
};

export default CampaignPage;
