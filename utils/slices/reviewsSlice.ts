import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../pages/_app";

export interface ReviewStateObj {
  providerName: string;
  reviewBody: string;
  estateName: string;
  area: string;
}

export interface ReviewState {
  reviewsToShow: [];
  review: object;
  loading: boolean;
  areaToFind: any;
  estateToFind: any;
  providerToFind: any;
}

const initialState: ReviewState = {
  reviewsToShow: [],
  loading: false,
  review: {},
  areaToFind: "",
  estateToFind: "",
  providerToFind: "",
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setReviews: (state, { payload }: any) => {
      if (payload) {
        const sortedReviews = payload.slice().sort((a, b) => b.date - a.date);
        state.reviewsToShow = sortedReviews;
      }
    },
    setReviewToPost: (state, { payload }: PayloadAction<object>) => {
      state.review = payload;
    },
    setAreaToFind: (state, { payload }: PayloadAction<any>) => {
      state.areaToFind = payload;
    },
    setEstateToFind: (state, { payload }: PayloadAction<any>) => {
      state.estateToFind = payload;
    },
    setProviderToFind: (state, { payload }: PayloadAction<any>) => {
      state.providerToFind = payload;
    },
  },
});

export const {
  setLoading,
  setReviews,
  setReviewToPost,
  setAreaToFind,
  setEstateToFind,
  setProviderToFind,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;

export const reviewsSelector = (state: { reviewsStore: ReviewState }) =>
  state.reviewsStore;
