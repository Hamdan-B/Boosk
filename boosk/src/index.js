import { React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SomeApp from "./components/GB_API.jsx";

// Google Books API key
const GOOGLE_BOOKS_API = "AIzaSyAbLk6ES7BqijZOLID2YDlKtCcLaQKKt1c";

//Practice Code
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<SomeApp />);
