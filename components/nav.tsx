export default function Nav({ openClosedModal, openSayHiModal }) {
  return (
    <nav className="bg-white px-8 py-4 shadow-md">
      <div className="flex justify-between items-center sm:max-w-xl lg:max-w-5xl m-auto">
        <div className="text-blue-1000 text-2xl font-semibold">WhichWiFi</div>

        <div className="">
          <button
            onClick={openSayHiModal}
            className="no-underline text-gray-700 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8 focus:outline-none"
          >
            say hi
          </button>
          <button
            onClick={openClosedModal}
            className="no-underline text-gray-700 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 focus:outline-none"
          >
            Leave a review
          </button>
        </div>
      </div>
    </nav>
  );
}
