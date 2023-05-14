import React from "react";
import {
	ScheduleComponent,
	ViewsDirective,
	ViewDirective,
	Day,
	Week,
	Month,
	Agenda,
	WorkWeek,
	Resize,
	Inject,
	DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Header } from "../components";
import { scheduleData } from "../data/dummy";

const Calendar = () => {
	return (
		<div className="m-2 mt-24 p-2 bg-white rounded-3xl md:m-10 md:p-10">
			<Header category="App" title="Calendar" />
			<ScheduleComponent
				height="650px"
				eventSettings={{ dataSource: scheduleData }}
				selectedDate={new Date(2021, 0, 10)}
			>
				<Inject
					services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
				/>
			</ScheduleComponent>
		</div>
	);
};

export default Calendar;
