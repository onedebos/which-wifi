import { NextApiRequest, NextApiResponse } from "next";
import { firebaseInit as firebase } from "../../utils/firebase";

const db = firebase.firestore();

const getAllReviews = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await db.collection("reviews").get();
    const reviews = [];
    response.forEach((doc) => reviews.push(doc.data()));

    return res.json({
      reviews,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Couldn't fetch reviews.",
    });
  }
};

export default getAllReviews;
