import React from "react";
import { Metadata } from "next";
import CampaignPage from "@/components/campaign/CampaignPage";

export const metadata: Metadata = {
  title: "Toingg | Campaign",
  description:
    "Manage campaigns by creating, updating, retrieving, and initiating calls based on supported languages and voices.",
};

const CampPage = () => {
  return (
    <div className="w-full min-h-full">
      <CampaignPage />
    </div>
  );
};

export default CampPage;
