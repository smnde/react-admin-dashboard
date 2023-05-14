import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
	const { setActiveMenu, activeMenu, screenSize } = useStateContext();

	const handleSidebar = () => {
		activeMenu && screenSize <= 900
			? setActiveMenu(false)
			: setActiveMenu(true);
	};

	const activeLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
	const normalLink =
		"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

	return (
		<div className="ml-3 h-screen overflow-auto pb-10 md:hover:overflow-auto md:overflow-hidden">
			{activeMenu && (
				<>
					<div className="flex justify-between items-center">
						<Link
							to={"/"}
							onClick={handleSidebar}
							className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
						>
							<SiShopware /> <span>Shappi</span>
						</Link>
						<TooltipComponent content={"Menu"} position="BottomCenter">
							<button
								className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
								type="button"
								onClick={() => setActiveMenu((prev) => !prev)}
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>

					<div className="mt-10">
						{links.map((item) => (
							<div
								key={item.title}
								className="text-gray-400 m-3 mt-4 uppercase"
							>
								<p>{item.title}</p>

								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={handleSidebar}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{link.icon}
										<span className="capitalize">{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
