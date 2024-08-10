import React from "react";
import CampaignElement from "./CampaignElement";

type CampaignListProps = {
  campaigns: Object;
};

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  return (
    <div className="w-full px-3 md:px-10 flex flex-col justify-center items-center space-y-2">
      <div className="w-full space-x-2 py-2 flex flex-row justify-between bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 font-sans font-bold text-xl md:text-2xl bg-slate-400">
        <span className="w-1/2 text-center border-2 border-blue-300 rounded-lg">
          Name
        </span>
        <span className="w-1/2 text-center border-2 border-blue-300 rounded-lg">
          Action
        </span>
      </div>
      {campaigns && Object.entries(campaigns).map(([key, value]) => {
        return <CampaignElement key={key} id={key} campaign={value} />;
      })}
    </div>
  );
};

export default CampaignList;
