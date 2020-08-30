import { NextApiRequest, NextApiResponse } from "next";
import { firebaseInit as firebase } from "../../utils/firebase";

const db = firebase.firestore();

const getAllReviews = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const reviews = await db.collection("reviews").get();

    return res.json({
      reviews: "ssss",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Couldn't fetch reviews.",
    });
  }
};

export default getAllReviews;
