import React from "react"
import {createRoot} from "react-dom/client"

export const App = () => {
  return <div>Hi!</div>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />)