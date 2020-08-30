import "../styles/index.css";
import { Provider } from "react-redux";
import Head from "next/head";
import { configureStore, Action } from "@reduxjs/toolkit";
import reviewsSliceReducer from "../utils/slices/reviewsSlice";
import { ThunkAction } from "redux-thunk";
import { ReviewState } from "../utils/slices/reviewsSlice";
import { removeHiddenAttrOnAreas } from "../utils/helpers";
export type AppThunk = ThunkAction<void, ReviewState, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    reviewsStore: reviewsSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "development" ? false : true,
});

interface CompProps {
  Component: React.FC;
  pageProps: any;
}

const MyApp: React.FC<CompProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
