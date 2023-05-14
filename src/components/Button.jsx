import React from "react";

const Button = ({ color, bgColor, btnSize, text, borderRadius }) => (
	<button
		type="button"
		style={{ backgroundColor: bgColor, color, btnSize, borderRadius }}
		className={`text-${btnSize} p-3 hover:drop-shadow-xl`}
	>
		{text}
	</button>
);

export default Button;
