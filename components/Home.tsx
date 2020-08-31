const Home = ({ darkMode }) => {
  return (
    <div className="text-center py-5 sm:py-10 px-10 sm:px-0 ">
      <h1
        className={`text-4xl font-semibold ${
          !darkMode ? "text-blue-1000" : "dark-txt"
        } text-accent-2`}
      >
        Find which WiFi works best in your location.
      </h1>
      <h3
        className={`${
          !darkMode ? "text-black" : "text-gray-500"
        } text-2xl font-medium`}
      >
        Spend wisely, avoid stories.
      </h3>
    </div>
  );
};

export default Home;
