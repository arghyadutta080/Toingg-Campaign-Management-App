import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormStepper from "./FormStepper";

type ModalProps = {
  openModal: boolean;
  handleClose: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "70vh",
  maxWidth: 550,
  minWidth: 300,
  bgcolor: "#1D1D1D",
  border: "2px solid #1D1D1D",
  boxShadow: 24,
  p: 4,
  overflowY: "auto" as "auto",
};

const FormModal: React.FC<ModalProps> = ({ openModal, handleClose }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormStepper />
      </Box>
    </Modal>
  );
};

export default FormModal;
