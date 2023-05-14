import React from "react";
import {
	HtmlEditor,
	Image,
	Link,
	RichTextEditorComponent,
	QuickToolbar,
	Toolbar,
	Inject,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";
import { Header } from "../components";
const Editor = () => {
	return (
		<div className="m-2 mt-24 p-2 bg-white rounded-3xl md:m-10 md:p-10">
			<Header category="App" title="Editor" />

			<RichTextEditorComponent>
				<EditorData />
				<Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
			</RichTextEditorComponent>
		</div>
	);
};

export default Editor;
