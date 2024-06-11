import React from "react";

export default function Loading() {
	return (
		<div className="h-screen grid place-content-center ">
			<div className="loader w-60 flex justify-evenly">
				<div className="ball w-12 h-12 rounded-full bg-white animate-bounce-1"></div>
				<div className="ball w-12 h-12 rounded-full bg-white animate-bounce-2"></div>
				<div className="ball w-12 h-12 rounded-full bg-white animate-bounce-3"></div>
			</div>
		</div>
	);
}
