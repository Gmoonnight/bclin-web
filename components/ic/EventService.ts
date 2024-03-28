import {WheelEvent} from "react";
import ICState from "@/components/ic/ICState";

const moveEventHandler = (state : ICState, e : WheelEvent, factor : number = 1) => {
	state.x += e.deltaX * factor;
	state.y += e.deltaY * factor;
	state.shouldRender = true;
	console.log("Move event, (deltaX, deltaY) = " + "(" + e.deltaX + ", " + e.deltaY + "), " + state.toString());
	return;
}

const zoomEventHandler = () => {
	console.log("zoom");
	return;
}

export const screenEventHandler = (w : number, h : number) => {
	let state = ICState.state();

	if(!state) {
		const radian = ICState.DEFAULT_RADIAN;

		const x = w / 2;
		const y = h / 2;
		const z = w / 2 / Math.tan(radian);

		state = new ICState(false, w, h, radian, x, y, z);
		ICState.init(state);
		console.log("Screen event, (w, h) = (" + w + ", " + h + "), " + state.toString());
		return;
	}

	state.w = w;
	state.h = h;
	state.z = w / 2 / Math.tan(ICState.DEFAULT_RADIAN);
	state.shouldRender = true;
	console.log("Screen event, (w, h) = (" + w + ", " + h + "), " + state.toString());
	return;
}

export const wheelEventHandler = (e : WheelEvent) => {
	if(!e.ctrlKey) {
		moveEventHandler(ICState.state(), e);
		return;
	}

	zoomEventHandler();
	return;
	
}
