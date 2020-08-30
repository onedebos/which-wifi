const LatestReviews = ({ reviews }) => {
  return (
    <div className="px-10 my-6 lg:max-w-5xl m-auto min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-3">
        Latest reviews
      </h1>

      <div className="bg-white rounded-md shadow-md px-6 pt-3 pb-6 lg:max-w-3xl">
        <div className="flex justify-between">
          <div className="font-medium">Tizeti - Wifi.com.ng</div>
          <div className="text-gray-600">June 2 2020</div>
        </div>
        <div className="mt-4">I enjoyed using Tizeti in my area</div>
        <p className="text-sm mt-4 font-light italic">
          Review by Femi, Bera Estate, Ajah{" "}
        </p>
      </div>
    </div>
  );
};

export default LatestReviews;
