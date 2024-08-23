import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  button,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function ModalDisplay({
  classNames,
  buttonBgStyle,
  buttonColor,
  video,
}) {
  console.log(buttonColor);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className={classNames} style={buttonBgStyle}>
        <button
          onClick={() => handleOpen()}
          type="button"
          className="   rounded-none text-black"
        >
          <svg className="w-20 h-20 origin">
            <circle
              cx="40"
              cy="40"
              r="38"
              strokeWidth="1"
              stroke={buttonColor}
              fill="none"
            ></circle>
            <polygon
              fill={buttonColor}
              stroke={buttonColor}
              strokeWidth="1"
              points="32,25 32,58 60,42"
            ></polygon>
          </svg>
        </button>
      </div>
      <Modal
        size={"full"}
        isOpen={isOpen}
        onClose={onClose}
        className="font-mono text-blue-600"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1 !font-mono  "></ModalHeader> */}

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
