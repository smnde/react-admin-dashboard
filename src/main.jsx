import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
	"ORg4AjUWIQA/Gnt2VFhiQlVPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtSd0VrXHhfd3FdR2E="
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
