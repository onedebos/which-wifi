import Nav from "../components/nav";
import Home from "../components/Home";
import LatestReviews from "../components/LatestReviews";
import useSWR, { mutate } from "swr";
import axios from "axios";
import Search from "../components/Search";
import LeaveAReview from "../components/LeaveAReview";
import { useState, useEffect } from "react";
import SayHi from "../components/SayHi";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  setReviews,
  reviewsSelector,
  setAreaToFind,
  setEstateToFind,
  setProviderToFind,
} from "./../utils/slices/reviewsSlice";
import ReactGA from "react-ga";

ReactGA.initialize("UA-169634848-4");

export default function IndexPage() {
  const [closeModal, setCloseModal] = useState<boolean>(true);
  const [openSayHiModal, setOpenSayHiModal] = useState<boolean>(false);

  const dispatch = useDispatch();
  const {
    reviewsToShow,
    areaToFind,
    estateToFind,
    providerToFind,
  } = useSelector(reviewsSelector);

  const openSayHiModalFn = () => {
    if (openSayHiModal) {
      setOpenSayHiModal(false);
    } else {
      setOpenSayHiModal(true);
    }
  };

  const openClosedModal = () => {
    if (closeModal) {
      setCloseModal(false);
    } else {
      setCloseModal(true);
    }
  };
  const fetcher = () => axios.get("/api/getreviews").then((res) => res.data);

  const { data: reviews } = useSWR("/api/getreviews", fetcher);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      if (reviews) {
        dispatch(setReviews(reviews.reviews));
      }
    }
    return () => {
      mounted = false;
    };
  }, [reviews]);

  const handleAreaToFind = (selected) => {
    const filteredByArea = reviews.reviews.filter(
      (review) => review.area === selected.value
    );
    dispatch(setReviews(filteredByArea));
    dispatch(setAreaToFind(selected));
    dispatch(setEstateToFind(""));
    dispatch(setProviderToFind(""));
  };

  const handleEstateToFind = (selected) => {
    const filteredByEstate = reviews.reviews.filter(
      (review) =>
        review.estateName.toLowerCase() == selected.value.toLowerCase()
    );

    dispatch(setReviews(filteredByEstate));
    dispatch(setEstateToFind(selected));
    dispatch(setProviderToFind(""));
    dispatch(setAreaToFind(""));
  };

  const handleProviderToFind = (selected) => {
    const filteredByProvider = reviews.reviews.filter(
      (review) => review.provider.toLowerCase() === selected.value.toLowerCase()
    );
    dispatch(setReviews(filteredByProvider));
    dispatch(setProviderToFind(selected));
    dispatch(setAreaToFind(""));
    dispatch(setEstateToFind(""));
  };

  const handleResetFilter = () => {
    dispatch(setProviderToFind(""));
    dispatch(setAreaToFind(""));
    dispatch(setEstateToFind(""));
    dispatch(setReviews(reviews.reviews));
  };

  return (
    <div className="lg:max-w-full">
      <Nav
        openClosedModal={openClosedModal}
        openSayHiModal={openSayHiModalFn}
      />
      <Home />
      <Search
        openClosedModal={openClosedModal}
        handleAreaToFind={handleAreaToFind}
        handleEstateToFind={handleEstateToFind}
        handleProviderToFind={handleProviderToFind}
        areaToFind={areaToFind}
        estateToFind={estateToFind}
        providerToFind={providerToFind}
        resetFilters={handleResetFilter}
        reviews={reviewsToShow}
      />
      <LatestReviews
        reviews={!reviewsToShow ? null : reviewsToShow}
        loading={!reviews ? true : false}
      />
      {closeModal ? null : (
        <LeaveAReview
          closeModal={openClosedModal}
          mutate={mutate}
          reviews={!reviews ? null : reviews}
        />
      )}
      {/* <LeaveAReview closeModal={openClosedModal} /> */}
      {openSayHiModal ? <SayHi openSayHiModal={openSayHiModalFn} /> : null}
      <Footer />
    </div>
  );
}
