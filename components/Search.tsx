import { useState, useEffect } from "react";
import { searchCriteria } from "../utils/helpers";
import Select from "react-select";
import Link from "next/link";

const Search = ({ openClosedModal }) => {
  const [provider, setProvider] = useState("tizeti");
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleShowAreas = () => {
    document.querySelector(".toggle").toggleAttribute("hidden");
    setSearchOpen(true);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: "1px dotted pink",
      color: "#0873fa",
      // padding: 20,
    }),
  };

  const handleChange = () => {};

  return (
    <>
      <div className="px-10 md:flex justify-center m-auto max-w-5xl">
        {searchCriteria.map((criteria, index) => {
          return (
            <div
              className="lg:w-1/3 md:w-1/2 w-full mx-2 my-2 md:my-0 "
              key={index}
            >
              <Select
                placeholder={criteria.criteria}
                options={criteria.options}
                className="text-blue-800"
                isSearchable
                styles={customStyles}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
      <p className="text-center mt-6">
        Help others by{" "}
        <span className="text-blue-1000 font-medium" onClick={openClosedModal}>
          Leaving a review
        </span>
      </p>
    </>
  );
};

export default Search;
