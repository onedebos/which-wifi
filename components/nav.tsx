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
              <img src="/night.svg" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
