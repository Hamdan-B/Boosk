import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TemplatePage from "./components/template.js";

// Google Books API key
const GOOGLE_BOOKS_API = "AIzaSyAbLk6ES7BqijZOLID2YDlKtCcLaQKKt1c";

//Practice Code
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<TemplatePage />);
