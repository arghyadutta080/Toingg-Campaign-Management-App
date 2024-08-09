import { Campaign } from "@/lib/types/campaign";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { getCampaignDetails } from "@/utils/functions/campaignDetails";

type ViewCampaignProps = {
  campaignId: string;
  campaign: Campaign;
  openModal: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "98vh",
  width: 600,
  bgcolor: "#1D1D1D",
  border: "2px solid #1D1D1D",
  boxShadow: 24,
  p: 4,
  overflowY: "auto" as "auto",
};

const ViewCampaignModal: React.FC<ViewCampaignProps> = ({
  campaignId,
  campaign,
  openModal,
  handleClose,
}) => {
  const campaignDetails = getCampaignDetails(campaign);
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className=" text-4xl mb-3 text-center font-bold">
          Campaign Details
        </h1>
        <div className="flex flex-col space-y-3 py-3">
          {campaignDetails.map((detail, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-base font-semibold ">
                {detail.title || "NA"}:
              </span>
              <span className=" text-xs font-medium text-gray-300">
                {detail.desc || "N/A"}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-row justify-between">
            <Button onClick={() => console.log(campaignId)}>Edit</Button>
            <Button onClick={handleClose}>Close</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ViewCampaignModal;
