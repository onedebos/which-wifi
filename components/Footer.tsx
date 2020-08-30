const Footer = () => {
  return (
    <footer className="md:mt-0 btn-blue-1000 p-10 w-full">
      <div className="flex justify-evenly flex-col md:flex-row lg:max-w-5xl m-auto">
        <div className="flex-1">
          <h2 className="text-white font-bold text-3xl">WhichWiFi</h2>
          <h4 className="text-white text-sm mr-2">
            &copy; 2020, We help Lagosians make better decisions on Which WiFi
            providers work best in their areas/estate.
          </h4>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 flex-1">
          <h1 className="text-white font-bold">WiFi providers</h1>
          <h3 className="text-gray-500">
            <a href="https://blog.adebola.dev">Tizeti - Wifi.com.ng</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://adebola.dev">Ngcom</a>
          </h3>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 flex-1">
          <h1 className="text-white font-bold">Most reviewed areas</h1>
          <h3 className="text-gray-500">
            <a href="https://blog.adebola.dev">Lekki Phase 1</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://adebola.dev">Ikate</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://adebola.dev">Chevron Drive</a>
          </h3>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 flex-1">
          <h1 className="text-white font-bold">More</h1>
          <h3 className="text-gray-500">
            <a href="https://blog.adebola.dev">TypeFastr</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://filelockrr.com">Other Products</a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
