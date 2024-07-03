import React from "react";
import Modal from "@mui/material/Modal";
import CreatSorten from "./CreatSorten";

const CreateSortenModal = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex justify-center items-center h-full w-full">
        <CreatSorten setOpen={setOpen} refetch={refetch} />
      </div>
    </Modal>
  );
};

export default CreateSortenModal;
