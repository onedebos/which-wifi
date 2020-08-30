import { NextApiRequest, NextApiResponse } from "next";
import { firebaseInit as firebase } from "../../utils/firebase";

const db = firebase.firestore();

const postReview = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { providerName, reviewBody, estateName, area } = req.body;
    const date = Date.now();

    await db.collection("reviews").doc().set({
      providerName,
      reviewBody,
      estateName,
      area,
      date,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong while saving your review.",
    });
  }
};

export default postReview;
