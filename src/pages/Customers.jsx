import React from "react";
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Page,
	Selection,
	Edit,
	Sort,
	Filter,
	Toolbar,
	Inject,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
	return (
		<div className="m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
			<Header category="Page" title="Customers" />

			<GridComponent
				dataSource={customersData}
				allowPaging
				allowSorting
				editSettings={{ allowEditing: true, allowDeleting: true }}
				toolbar={["Delete"]}
				width="auto"
			>
				<ColumnsDirective>
					{customersGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>

				<Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
