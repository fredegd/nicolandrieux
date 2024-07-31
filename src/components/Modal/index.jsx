import React, { useState, useEffect } from "react";

function Modal({ slide }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Add or remove body class to disable scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    slide && (
      <>
        <div className="w-full h-full flex items-center justify-center bg-white ">
          <button
            onClick={toggleModal}
            className="block w-10/12 h-[47vw] text-white border border-black"
            type="button"
          >
            <video
              width="640"
              height="480"
              preload="auto"
              autoPlay
              loop
              playsInline
              src={slide.preview}
              className="w-full h-full"
            />
          </button>
        </div>

        {isModalOpen && (
          <div
            id="static-modal"
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
            aria-hidden="true"
          >
            <div className="relative w-full h-full bg-white flex flex-col justify-center items-center p-4">
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                onClick={toggleModal}
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="w-full h-full flex justify-center items-center">
                <iframe
                  src={slide.caseImg}
                  title={slide.content}
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default Modal;
