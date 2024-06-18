import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="bg-black/50 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col px-5 pb-5 pt-2 bg-slate-300 w-2/3 p-s ">
              <button
                onClick={() => setShowModal(false)}
                className="flex flex-col items-end text-2xl mb-3 "
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;