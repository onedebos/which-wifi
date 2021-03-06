import { useState, useEffect } from "react";
import { searchCriteria } from "../utils/helpers";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

const Search = ({
  openClosedModal,
  handleAreaToFind,
  handleEstateToFind,
  handleProviderToFind,
  areaToFind,
  estateToFind,
  providerToFind,
  resetFilters,
  reviews,
  darkMode,
}) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
  };

  const estates = reviews
    .map((review) => {
      return {
        value: review.estateName,
        label: review.estateName,
      };
    })
    .filter((estate) => estate.label.length > 0);

  return (
    <>
      <div className="px-10 md:flex justify-center m-auto max-w-5xl">
        <div
          className="lg:w-1/3 md:w-1/2 w-full mx-2 my-2 md:my-0 "
          key={uuidv4()}
        >
          <Select
            placeholder={searchCriteria[0].criteria}
            options={searchCriteria[0].options}
            className="text-blue-800"
            isSearchable
            styles={customStyles}
            onChange={handleAreaToFind}
            inputId={searchCriteria[0].criteria.toString()}
            value={areaToFind}
          />
        </div>
        <div
          className="lg:w-1/3 md:w-1/2 w-full mx-2 my-2 md:my-0 "
          key={uuidv4()}
        >
          <Select
            placeholder={searchCriteria[1].criteria}
            options={estates}
            className="text-blue-800"
            isSearchable
            styles={customStyles}
            onChange={handleEstateToFind}
            inputId={searchCriteria[1].criteria.toString()}
            value={estateToFind}
          />
        </div>
        <div
          className="lg:w-1/3 md:w-1/2 w-full mx-2 my-2 sm:my-0"
          key={uuidv4()}
        >
          <Select
            placeholder={searchCriteria[2].criteria}
            options={searchCriteria[2].options}
            className="text-blue-800"
            isSearchable
            styles={customStyles}
            onChange={handleProviderToFind}
            inputId={searchCriteria[2].criteria.toString()}
            value={providerToFind}
          />
        </div>
        <button
          onClick={resetFilters}
          className="focus:outline-none hidden sm:block"
        >
          <svg
            className="hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 18 18"
            fill="gray"
          >
            <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z" />
          </svg>
        </button>
        <button
          className={`mx-2 sm:hidden ${
            !darkMode ? "btn-blue-1000 text-white" : "bg-blue-900 dark-txt"
          } w-full shadow-md text-center  font-semibold py-2 rounded-md flex m-auto justify-center`}
          onClick={resetFilters}
        >
          <span>Reset</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill={`${!darkMode ? "white" : "#1da1f2"}`}
            onClick={resetFilters}
            className="mt-1 ml-1"
          >
            <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z" />
          </svg>
        </button>
      </div>
      <p
        className={`${
          !darkMode ? "text-black" : "text-gray-500"
        } text-center mt-6`}
      >
        Help others by{" "}
        <span
          className={`${
            !darkMode ? "text-blue-1000" : "dark-txt"
          } font-medium cursor-pointer`}
          onClick={openClosedModal}
        >
          Leaving a review
        </span>
      </p>
    </>
  );
};

export default Search;
