import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, PieCharts, Button, SparkLine } from "../components";
import {
	earningData,
	SparklineAreaData,
	ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Ecommerce = () => {
	return (
		<div className="mt-12">
			<div className="flex flex-wrap justify-center lg:flex-nowrap">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
					<div className="flex justify-between items-center">
						<div className="">
							<p className="font-bold text-gray-400">Earnings</p>
							<p className="text-2xl ">$63,448.78</p>
						</div>
					</div>

					<div className="mt-6">
						<Button
							className=""
							color={"white"}
							bgColor={"blue"}
							text={"Download"}
							borderRadius={"10px"}
							btnSize={"md"}
						/>
					</div>
				</div>

				<div className="flex m-3 flex-wrap justify-center items-center gap-1">
					{earningData.map((item) => (
						<div
							className="bg-white w-full p-4 pt-9 rounded-xl md:w-56 dark:bg-secondary-dark-bg dark:text-gray-200"
							key={item.title}
						>
							<button
								type="button"
								style={{ color: item.iconColor, backgroundColor: item.iconBg }}
								className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
							>
								{item.icon}
							</button>

							<p className="mt-3">
								<span className="text-lg font-semibold">{item.amount}</span>
								<span className={`text-sm text-${item.pcColor} ml-2`}>
									{item.percentage}
								</span>
							</p>

							<p className="text-sm text-gray-400 mt-1">{item.title}</p>
						</div>
					))}
				</div>
			</div>

			<div className="flex gap-10 flex-wrap justify-center">
				<div className="bg-white m-3 p-4 rounded-2xl md:w-780 dark:text-gray-200 dark:bg-secondary-dark-bg">
					<div className="flex justify-between">
						<p className="font-semibold">Revenue Update</p>
						<div className="flex items-center gap-4">
							<p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
								<span className="">
									<GoPrimitiveDot />
								</span>
								<span className="">Expense</span>
							</p>

							<p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
								<span className="">
									<GoPrimitiveDot />
								</span>
								<span className="">Budget</span>
							</p>
						</div>
					</div>

					<div className="mt-10 flex gap-10 flex-wrap justify-center">
						<div className="border-r-1 border-color m-4 pr-10">
							<div className="">
								<p className="">
									<span className="text-3xl font-semibold">$93,438</span>
									<span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
										23%
									</span>
								</p>
								<p className="text-gray-500 mt-1">Budget</p>
							</div>

							<div className="mt-8">
								<p className="">
									<span className="text-3xl font-semibold">$48,438</span>
								</p>
								<p className="text-gray-500 mt-1">Expense</p>
							</div>

							<div className="mt-5 ">
								<SparkLine
									currentColor={`blue`}
									id="line-sparkline"
									type="Line"
									height="80px"
									width="250px"
									data={SparklineAreaData}
									color="blue"
								/>
							</div>

							<div className="mt-10">
								<Button
									color={"white"}
									bgColor={"blue"}
									text={"Download Report"}
									borderRadius={"10px"}
								/>
							</div>
						</div>

						<div className="">
							<Stacked width={"320px"} height={"360px"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecommerce;