const Modal = ({ toggleModal }: { toggleModal: () => void }) => {

  return (
    <div className="absolute flex flex-col h-screen w-full z-10 justify-center items-center bg-black/50">
      <div aria-hidden="true">
        <div className="p-4 w-full max-w-md max-h-full mx-auto">
          <div className="relative rounded-lg shadow bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
              <h3 className="text-lg font-semiboldtext-white">
                You&apos;ve Been Approved!
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparentrounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={() => toggleModal()}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-10">
              <p>Your money is on the way 💸</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
