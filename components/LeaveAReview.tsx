import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { searchCriteria } from "../utils/helpers";
import Select from "react-select";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

export interface ReviewStateObj {
  provider: string;
  reviewBody: string;
  estateName: string;
  area: string;
  name: string;
  date?: string;
  stars?: string;
}

const LeaveAReview = ({ closeModal, mutate, reviews }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [countText, setCountText] = useState<string>("");
  const [charLeft, setCharLeft] = useState<Number>(280);
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [showSuccess, setShowSuccess] = useState<string>("");
  const [showError, setShowError] = useState<string>("");

  const providers = watch("provider");

  const sendDataToDb = async (data: ReviewStateObj) => {
    setShowSuccess("");
    setShowError("");
    setLoading(true);
    try {
      await axios.post("/api/postreview", data);
      mutate("/api/getreviews");
      setLoading(false);
      setShowSuccess("Review posted!");
    } catch (error) {
      setShowError("Something went wrong on our end.");
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    const review: ReviewStateObj = {
      reviewBody: data.experience,
      estateName: data.estateName,
      area: data.area.value,
      provider: data.provider.value,
      name: data.name,
      stars: data.stars,
    };

    sendDataToDb(review);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setCountText(watch("experience"));
      setCharLeft(280 - countText.length);
    }
    return () => {
      mounted = false;
    };
  }, [watch]);

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={closeModal}
      ></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <span className="text-sm"></span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <div>
              <p className="text-2xl font-bold text-blue-1000">
                Help others decide on WhichWifi by leaving a review.
              </p>
              <p
                className={`text-sm ${
                  showSuccess.length > 1 ? "text-green-700" : "text-red-600"
                } font-medium transition ease-in-out duration-300`}
              >
                {showSuccess || (showError && showSuccess) || showError}
              </p>
            </div>

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
              <input
                name="name"
                ref={register({ required: true })}
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mb-1 p-2 focus:outline-none"
                placeholder="your name*"
              />
            </div>
            <div>
              <Controller
                as={Select}
                options={searchCriteria[2].options}
                name="provider"
                control={control}
                defaultValue="MTN"
                rules={{ required: true }}
                placeholder="select a provider*"
              />

              {errors.provider && <span>This field is required</span>}
            </div>

            <div className="mt-1">
              <Controller
                as={Select}
                options={searchCriteria[0].options}
                name="area"
                control={control}
                defaultValue="Abraham Adesanya Estate"
                rules={{ required: true }}
                placeholder="select an area*"
              />

              {errors.area && <span>This field is required</span>}
            </div>

            <div>
              <input
                name="estateName"
                ref={register}
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2 focus:outline-none"
                placeholder="enter your Estate(optional)"
              />
            </div>
            <div className="mt-1 flex py-2">
              <label className="mr-2 opacity-75">
                Give{" "}
                <span className="text-blue-1000">
                  {providers ? providers.value : "them"}
                </span>{" "}
                a rating
              </label>
              <Controller
                as={<ReactStars />}
                name="stars"
                control={control}
                defaultValue={3}
                rules={{ required: true }}
                className="focus:outline-none"
              />

              {errors.stars && <span>This field is required</span>}
            </div>

            <div>
              <textarea
                name="experience"
                ref={register({ required: true })}
                className="w-full border border-1 rounded-sm focus:border-indigo-600 mt-1 p-2 focus:outline-none"
                placeholder={
                  providers
                    ? `tell others your experience with ${providers.value}*`
                    : `tell others your experience`
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
