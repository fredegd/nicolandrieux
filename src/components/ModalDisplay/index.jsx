import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import ScrambleEffect from "../ScrambleEffect";

export default function ModalDisplay({ buttonContent, video, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div
        className=" w-full h-full    rounded-none p-0 
        bg-center bg-no-repeat bg-cover
        cursor-default flex items-center justify-center relative
        "
        style={{ backgroundImage: `url(${buttonContent})` }}
      >
        <button
          onClick={() => handleOpen()}
          type="button"
          className="   rounded-none"
        >
          <svg className="w-20 h-20 origin">
            <circle
              cx="40"
              cy="40"
              r="40"
              stroke="#fff"
              stroke-width="1"
              fill="#cccccc22"
            ></circle>
            <polygon
              fill="#ffffff"
              stroke="#fff"
              stroke-width="1"
              points="32,25 32,58 60,42"
            ></polygon>
          </svg>
        </button>
      </div>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-mono   text-black">
                <ScrambleEffect tInput={title} />
              </ModalHeader>
              <ModalBody className="pb-4">
                <iframe
                  src={video}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
