import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer } from "./components";
import {
	Ecommerce,
	Orders,
	Employees,
	Pyramid,
	Customers,
	Kanban,
	Area,
	Bar,
	Pie,
	Financial,
	ColorPicker,
	ColorMapping,
	Editor,
	Calendar,
	Line,
	Stacked,
} from "./pages";
import "./App.css";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
	useEffect(() => {});

	const { activeMenu } = useStateContext();

	return (
		<div>
			<BrowserRouter>
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
						<TooltipComponent content={"Settings"} position="Top">
							<button
								type="button"
								className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
								style={{ background: "blue", borderRadius: "50%" }}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className="w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					)}

					<div
						className={`
						dark:bg-main-bg bg-main-bg min-h-screen w-full
							${activeMenu ? "md:ml-72" : "flex-2"}
						`}
					>
						<div className="fixed bg-main-bg navbar w-full dark:bg-main-dark-bg md:static">
							<Navbar />
						</div>

						<div className="">
							<Routes>
								<Route path="/" element={<Ecommerce />} />
								<Route path="/ecommerce" element={<Ecommerce />} />

								<Route path="/orders" element={<Orders />} />
								<Route path="/employees" element={<Employees />} />
								<Route path="/customers" element={<Customers />} />

								<Route path="/kanban" element={<Kanban />} />
								<Route path="/editor" element={<Editor />} />
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/color-picker" element={<ColorPicker />} />

								<Route path="/line" element={<Line />} />
								<Route path="/area" element={<Area />} />
								<Route path="/bar" element={<Bar />} />
								<Route path="/pie" element={<Pie />} />
								<Route path="/financial" element={<Financial />} />
								<Route path="/color-mapping" element={<ColorMapping />} />
								<Route path="/pyramid" element={<Pyramid />} />
								<Route path="/stacked" element={<Stacked />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
