import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Campaign } from "@/lib/types/campaign";
import ModalBody from "./ModalBody";

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
  maxHeight: "90vh",
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
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalBody campaign={campaign} campaignId={campaignId} handleClose={handleClose}/>

      </Box>
    </Modal>
  );
};

export default ViewCampaignModal;
