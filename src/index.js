import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import "animate.css";
import "swiper/swiper-bundle.min.css";
import "../node_modules/yet-another-react-lightbox/dist/styles.css";
import "../node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css";
import "./assets/scss/style.scss";
import "./input.css";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistProvider>
      <App />
    </PersistProvider>
  </Provider>
);
