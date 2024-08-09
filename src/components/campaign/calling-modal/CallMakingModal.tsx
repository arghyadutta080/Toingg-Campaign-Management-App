import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CallMakingForm from "./CallMakingForm";

type CallMakingProps = {
  campaignId: string;
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

const CallMakingModal: React.FC<CallMakingProps> = ({
  campaignId,
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
        <h1 className=" text-4xl mb-3 text-center font-bold">
          Make a Call
        </h1>
        <CallMakingForm campID={campaignId} />
      </Box>
    </Modal>
  );
};

export default CallMakingModal;
