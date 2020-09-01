export default function Nav({
  openClosedModal,
  openSayHiModal,
  enableDarkMode,
  darkMode,
}) {
  const navToggle = () => {
    var btn = document.getElementById("menuBtn");
    var nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <div className={`px-8 py-4 shadow-md ${darkMode ? "dark-bg" : "bg-white"}`}>
      <header
        id="top"
        className="w-full flex flex-col pin-t pin-r pin-l lg:max-w-full m-auto z-20"
      >
        <nav
          id="site-menu"
          className="flex flex-col sm:flex-row w-full justify-around items-center px-4 sm:px-6 py-1"
        >
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <a href="/" className="py-1">
              <h1
                className={`${
                  !darkMode ? "text-blue-1000" : "dark-txt"
                } text-2xl font-semibold
                `}
              >
                WhichWiFi
              </h1>
            </a>

            <button
              type="button"
              role="button"
              id="menuBtn"
              className="hamburger block sm:hidden focus:outline-none"
              onClick={navToggle}
            >
              <span className="hamburger__top-bun"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
          </div>
          <div
            id="menu"
            className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
          >
            <button
              type="button"
              role="button"
              onClick={openSayHiModal}
              className={`no-underline ${
                !darkMode ? "text-gray-700" : "text-gray-500"
              } border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 focus:outline-none`}
            >
              SAY HI
            </button>

            <div className="w-full mt-2 md:w-auto md:mt-0 text-center">
              <button
                type="button"
                role="button"
                className={`no-underline ${
                  !darkMode ? "text-gray-700" : "text-gray-500"
                } border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 focus:outline-none sm:ml-4`}
                onClick={openClosedModal}
              >
                LEAVE A REVIEW
              </button>
            </div>
            <button
              type="button"
              onClick={enableDarkMode}
              role="button"
              className="sm:ml-4 focus:outline-none"
            >
              {/* <img src="/night.svg" /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="#c4c4c4"
                width="20px"
                height="20px"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <g>
                      <path d="M11.1,12.08C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12c0,0.14,0.02,0.28,0.02,0.42 C2.62,12.15,3.29,12,4,12c1.66,0,3.18,0.83,4.1,2.15C9.77,14.63,11,16.17,11,18c0,1.52-0.87,2.83-2.12,3.51 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C18,17.72,13.38,16.52,11.1,12.08z" />
                    </g>
                    <path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
