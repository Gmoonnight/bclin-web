import ICState from "@/components/ic/ICState";

export default class RenderLoop {
	private fps : number;
	private render : () => void;
	
	private renderInterval : number;
	private lastRequestId : number | null = null;
	private lastRenderTime : number = 0;
	constructor(fps : number, setDraw : (draw : number) => void) {
		this.fps = fps;
		this.render = () => {
			let state = ICState.state();
			if(!state || !state.shouldRender) {
				return;
			}
			setDraw(performance.now());
			state.shouldRender = false;
			console.log("--------- Trigger canvas render ----------");
		}

		this.renderInterval = 1000 / fps;
	}

	public start() {
		this.lastRenderTime = performance.now();
		console.log("EventLoop start");
		this.loop();
	}

	public stop() {
		console.log("EventLoop stop");
		if(!this.lastRequestId) {
			return;
		}

		window.cancelAnimationFrame(this.lastRequestId);
		this.lastRequestId = null;
	}

	private loop() {
		this.lastRequestId = window.requestAnimationFrame(() => this.loop());

		const now = performance.now();
		if(now - this.lastRenderTime >= this.renderInterval) {
			this.lastRenderTime = now;
			this.render();
		}
	}
}
