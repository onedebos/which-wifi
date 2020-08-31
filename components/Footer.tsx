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
            <a href="https://wifi.com.ng/">Tizeti - Wifi.com.ng</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://ngcomnetworks.com">Ngcom</a>
          </h3>

          <h3 className="text-gray-500">
            <a href="https://www.ipnxnigeria.net/">ipNX</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://smile.com.ng/">Smile</a>
          </h3>

          <h3 className="text-gray-500">
            <a href="https://spectranet.com.ng/">Spectranet</a>
          </h3>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 flex-1">
          <h1 className="text-white font-bold">Most reviewed areas</h1>
          <h3 className="text-gray-500">
            <a href="https://en.wikipedia.org/wiki/Lekki">Lekki Phase 1</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://www.neighbourhoodreview.com/a-comprehensive-review-of-ikate/">
              Ikate
            </a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://en.wikipedia.org/wiki/Yaba,_Lagos">Yaba</a>
          </h3>
        </div>
        <div className="flex flex-col mt-4 md:mt-0 flex-1">
          <h1 className="text-white font-bold">More</h1>
          <h3 className="text-gray-500">
            <a href="">WhichWiFi</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="">Affordable Fast internet in Lagos</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="">Best internet in Lagos</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="">Review of internet providers in Lagos</a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
