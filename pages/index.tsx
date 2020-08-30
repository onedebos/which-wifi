import Nav from "../components/nav";
import Home from "../components/Home";
import LatestReviews from "../components/LatestReviews";
import useSWR from "swr";
import axios from "axios";
import Search from "../components/Search";
import LeaveAReview from "../components/LeaveAReview";
import { useState } from "react";
import SayHi from "../components/SayHi";
import Footer from "../components/Footer";

export default function IndexPage() {
  const [closeModal, setCloseModal] = useState<boolean>(true);
  const [openSayHiModal, setOpenSayHiModal] = useState<boolean>(false);

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
  // const fetcher = () => axios.get("/api/getreviews").then((res) => res.data);

  // const { data, error } = useSWR("/api/getreviews", fetcher);
  // console.log(data, "error", error.response.data.message);
  return (
    <div className="lg:max-w-full">
      <Nav
        openClosedModal={openClosedModal}
        openSayHiModal={openSayHiModalFn}
      />
      <Home />
      <Search openClosedModal={openClosedModal} />
      <LatestReviews reviews="reviews" />
      {closeModal ? null : <LeaveAReview closeModal={openClosedModal} />}
      {/* <LeaveAReview closeModal={openClosedModal} /> */}
      {openSayHiModal ? <SayHi openSayHiModal={openSayHiModalFn} /> : null}
      <Footer />
    </div>
  );
}
