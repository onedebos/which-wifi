const SayHi = ({ openSayHiModal, darkMode }) => {
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={openSayHiModal}
      ></div>

      <div
        className={`modal-container ${
          !darkMode ? "bg-white" : "bg-blue-900"
        } w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto py-10`}
      >
        <div className="modal-open absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <span className="text-sm"></span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p
              className={`text-2xl font-bold ${
                !darkMode ? "text-blue-1000" : "dark-txt"
              }`}
            >
              Noticed something we should fix? Reach out.
            </p>
            <div className="modal-open cursor-pointer z-50">
              <button onClick={openSayHiModal}>
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
          </div>

          <p
            className={`${!darkMode ? "text-black" : "text-gray-500"} text-xl`}
          >
            whichwifi.ng@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SayHi;
