"use client"

import {useState, useRef, useEffect, WheelEvent} from "react";
import useSize from "@react-hook/size";

import Canvas from "@/components/ic/Canvas";
import RenderLoop from "@/components/ic/RenderLoop";
import {screenEventHandler, wheelEventHandler} from "@/components/ic/EventService";

export default function InfiniteCanvas() {
	const [draw, setDraw] = useState(0);
	const loop = useRef<RenderLoop>(new RenderLoop(10, setDraw));
	// This runs only on mount(when the components appears)
	useEffect(() => {
		loop.current.start();

		return () => {
			loop.current.stop();
		}
	}, []);

	const ic = useRef<HTMLDivElement>(null);
	const [w, h] = useSize(ic);

	// This runs under two conditions:
	// 1. After rendering
	// 2. w or h has been changed compare to previous render
	useEffect(() => {
		if(w == 0 || h == 0) return;
		screenEventHandler(w, h);
	}, [w, h]);


	return (
		<div
			ref = {ic}
			onWheel = {wheelEventHandler}
		>
			<Canvas draw = {draw} />
		</div>
	);
}
