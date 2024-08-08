"use client";

import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { getCampaigns } from "@/api/campaign";
import CampaignList from "./CampaignList";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const fetchedData = useRef(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCampaignData = async () => {
      const data = await getCampaigns();
      if (!data?.status) {
        toast.error(data?.message);
        setLoading(false);
      }
      console.log(data?.result);
      setCampaigns(data?.result);
      setLoading(false);
    };
    if (!fetchedData.current) {
      getCampaignData();
      fetchedData.current = true;
    }
  }, []);

  console.log(typeof campaigns);

  return (
    <div>
      <h1 className="relative z-10 text-lg md:text-5xl mx-10 my-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-300  text-left font-sans font-bold">
        Manage Campaigns
      </h1>
      <p></p>
      <p className="text-neutral-300 max-w-full mx-10 my-2 text-lg text-left relative z-10">
        This page is for managing your campaigns. You can create, modify, view,
        and update your campaigns here.
      </p>
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

      <BackgroundBeams />
    </div>
  );
};

export default CampaignPage;
