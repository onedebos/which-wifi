import { NextApiRequest, NextApiResponse } from "next";
import { firebaseInit as firebase } from "../../utils/firebase";

const db = firebase.firestore();

const postReview = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { provider, reviewBody, estateName, area, name, stars } = req.body;
    const date = Date.now();

    await db.collection("reviews").doc().set({
      provider,
      reviewBody,
      estateName,
      area,
      name,
      date,
      stars,
    });
    return res.status(200).json({
      message: "Successfully created review.",
      reviews: {
        provider,
        reviewBody,
        estateName,
        area,
        name,
        date,
        stars,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong while saving your review.",
    });
  }
};

export default postReview;
