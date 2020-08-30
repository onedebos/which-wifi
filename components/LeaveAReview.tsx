import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { searchCriteria } from "../utils/helpers";
import { v4 as uuidv4 } from "uuid";
import { capitalize } from "../utils/helpers";

const LeaveAReview = ({ closeModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [providers, setProviders] = useState<string>("");
  const [countText, setCountText] = useState<string>("");
  const [charLeft, setCharLeft] = useState<Number>(280);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    if (data.estateName) {
      capitalize(data.estateName);
    }
    console.log(data);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      // setProviders(watch("provider"));
      // console.log(providers);
      setCountText(watch("experience"));
      setCharLeft(280 - countText.length);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={closeModal}
      ></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <button onClick={closeModal} className="focus:outline-none">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>
          <span className="text-sm"></span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-blue-1000">
              Help others make better decisions by leaving a review.
            </p>
            <div className="modal-close cursor-pointer z-50">
              <button onClick={closeModal} className="focus:outline-none">
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <select
                ref={register({ required: true })}
                name="provider"
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2 bg-white"
              >
                {searchCriteria[2].options.map((provider) => {
                  return (
                    <option
                      key={uuidv4()}
                      value={provider.value}
                      className="text-blue-1000"
                      placeholder="select a provider"
                    >
                      {provider.label}
                    </option>
                  );
                })}
              </select>
              {errors.provider && <span>This field is required</span>}
            </div>
            <div>
              <select
                ref={register({ required: true })}
                name="area"
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2 bg-white"
              >
                {searchCriteria[0].options.map((provider) => {
                  return (
                    <option
                      key={uuidv4()}
                      value={provider.value}
                      className="text-blue-1000"
                      placeholder="select a provider"
                    >
                      {provider.label}
                    </option>
                  );
                })}
              </select>
              {errors.area && <span>This field is required</span>}
            </div>

            <div>
              <input
                name="estateName"
                ref={register}
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2"
                placeholder="enter your Estate(optional)"
              />
            </div>

            <div>
              <textarea
                name="experience"
                ref={register({ required: true })}
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2"
                placeholder={
                  providers
                    ? `tell us your experience with ${providers}`
                    : `tell us your experience`
                }
                maxLength={280}
              />
              {errors.experience && (
                <span className="text-sm italic text-red-500">
                  This field is required
                </span>
              )}
              <p>
                <span className="text-sm text-gray-600">
                  {charLeft} characters left
                </span>
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={loading ? false : null}
                className={`${
                  loading ? "p-2" : "p-3"
                } px-4 btn-blue-1000 rounded-lg text-white hover:bg-indigo-400 focus:outline-none w-full`}
              >
                {loading ? <span id="loading"></span> : "Share review!"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveAReview;
