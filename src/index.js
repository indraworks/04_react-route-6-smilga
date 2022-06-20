import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import Error from "./pages/Error"
import Home from "./pages/Home"
import About from "./pages/About"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
