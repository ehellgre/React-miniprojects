// importing images -> 'import [anything] from "./images/[image_name]" -> <img src={reactLogo} />

import React from "react"
import { createRoot } from 'react-dom/client'
import "./style.css"
import App from "./App"

const root = createRoot(document.getElementById("root"))

root.render(<App />)
