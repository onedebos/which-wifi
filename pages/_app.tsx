import "../styles/index.css";
import { Provider } from "react-redux";
import Head from "next/head";
import { configureStore, Action } from "@reduxjs/toolkit";
import reviewsSliceReducer from "../utils/slices/reviewsSlice";
import { ThunkAction } from "redux-thunk";
import { ReviewState } from "../utils/slices/reviewsSlice";
import { NextSeo } from "next-seo";

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
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        ></link>
        <meta name="theme-color" content="#0873FA" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/onedebeos/image/upload/v1598883521/which-wifi/Group_8which-wifi_dfrzhc.svg"
        />
      </Head>
      <NextSeo
        title="Find the best WiFi providers in Lagos with WhichWiFi"
        description="WhichWiFi allows you find the best WiFi in your location based on reviews."
        canonical="https://www.whichwifi.work"
        openGraph={{
          url: "https://whichwifi.work",
          title:
            "Find the best WiFi providers in Lagos with WhichWiFi | Spend wisely, avoid stories.",
          description:
            "WhichWiFi allows you find the best WiFi in your location based on reviews. | Spend wisely, avoid stories.",
          images: [
            {
              url:
                "https://res.cloudinary.com/onedebeos/image/upload/v1598883521/which-wifi/Group_8which-wifi_dfrzhc.svg",
              width: 800,
              height: 600,
              alt: "WhichWiFi Lagos",
            },
            {
              url:
                "https://res.cloudinary.com/onedebeos/image/upload/v1598883590/which-wifi/Group_8which-wifi_1_tzjb4b.svg",
              width: 900,
              height: 800,
              alt: "WhichWiFi Lagos",
            },
          ],
          site_name: "WhichWiFi",
        }}
        twitter={{
          handle: "@whichwifi",
          site: "@whichwifi",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
