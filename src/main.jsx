import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
import { store } from "./redux/store";
import UserContext from "./Page/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserContext>
        <App />
      </UserContext>
    </Provider>
  </StrictMode>
);