import {memo} from "react";

const Canvas = ({draw} : {draw : number}) => {
	// console.log(draw);
	return (
		<canvas className = "w-screen h-screen overflow-hidden scroll-none bg-red-50">
		</canvas>
	);
};

export default memo(Canvas);
