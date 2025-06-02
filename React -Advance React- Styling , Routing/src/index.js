import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Ensure correct import
import "./index.css"; // Ensure index.css exists in the same directory

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render( <
        React.StrictMode >
        <
        App / >
        <
        /React.StrictMode>
    );
} else {
    console.error("Root element not found!");
}