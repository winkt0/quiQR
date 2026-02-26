import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import QRCodeComponent from "./popup";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <QRCodeComponent />
  </StrictMode>
);

createRoot(elem).render(app);
