import { Skeleton } from "@material-ui/lab";
import { ReviewStateObj } from "./LeaveAReview";
import { v4 as uuidv4 } from "uuid";
import { capitalize } from "../utils/helpers";
import moment from "moment";
import ReactStars from "react-rating-stars-component";

const LatestReviews = ({ reviews, loading, darkMode }) => {
  return (
    <div className="px-10 my-6 lg:max-w-5xl m-auto min-h-screen">
      <h1
        className={`text-3xl font-semibold ${
          !darkMode ? "text-gray-800" : "text-gray-500"
        } mb-3`}
      >
        Latest reviews
      </h1>

      {!loading && reviews ? (
        <>
          {reviews.map((review: ReviewStateObj) => {
            const {
              area,
              provider,
              reviewBody,
              estateName,
              name,
              date,
              stars,
            } = review;
            return (
              <div
                className={`${
                  !darkMode ? "bg-white" : "bg-blue-900 dark-txt"
                } rounded-md shadow-md px-6 pt-3 pb-6 lg:max-w-3xl mb-2`}
                key={uuidv4()}
              >
                <div className="sm:flex justify-between">
                  <div className="font-medium">{provider}</div>
                  <div className="text-sm sm:text-md text-gray-600">
                    {moment(date).fromNow()}
                  </div>
                </div>
                <div className="mt-4">{reviewBody}</div>
                <div className="flex mt-4">
                  <ReactStars
                    count={5}
                    value={parseInt(stars)}
                    activeColor="#ffd700"
                    edit={false}
                  />
                  <p className="text-sm text-gray-600 ml-3">
                    {stars}.0/5.0 stars
                  </p>
                </div>
                <p className="text-sm mt-1 font-light italic text-gray-600">
                  Review by {name ? capitalize(name) : null}
                  {estateName
                    ? `, ${"Estate: " + capitalize(estateName)}`
                    : null}
                  , {area ? capitalize(area) : null}
                </p>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <Skeleton height={250} />
          <Skeleton height={250} />
          <Skeleton height={250} />
        </>
      )}
    </div>
  );
};

export default LatestReviews;
