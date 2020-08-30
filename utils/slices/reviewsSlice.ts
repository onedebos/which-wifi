import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../pages/_app";

export interface ReviewStateObj {
  providerName: string;
  reviewBody: string;
  estateName: string;
  area: string;
}

export interface ReviewState {
  reviews: [];
  review: object;
  loading: boolean;
}

const initialState: ReviewState = {
  reviews: [],
  loading: false,
  review: {},
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setReviews: (state, { payload }: any) => {
      state.reviews = payload;
    },
    setReviewToPost: (state, { payload }: PayloadAction<object>) => {
      state.review = payload;
    },
  },
});

export const { setLoading, setReviews, setReviewToPost } = reviewsSlice.actions;

export default reviewsSlice.reducer;

export const reviewsSelector = (state: { reviewsStore: ReviewState }) =>
  state.reviewsStore;
