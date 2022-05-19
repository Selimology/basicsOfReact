import { createRoot } from "react-dom/client";

import App from "./App";
import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Login />);
