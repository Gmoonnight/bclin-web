let state : ICState;

export default class ICState {
	private static DEFAULT_ANGLE= 30;
	public static DEFAULT_RADIAN = Math.PI * ICState.DEFAULT_ANGLE / 180;

	public static init(s : ICState) {
		state = s;
	}

	public static state() {
		return state;
	}

	constructor(
		// wether need render
		private _shouldRender : boolean,

		// projection width
		private _w : number,
		// projection height
		private _h : number,
		// projection radian
		private _radian : number,

		// camera x-coordinate
		private _x : number,
		// camera y-coordinate
		private _y : number,
		// camera z-coordinate
		private _z : number,
	) {}

	public set shouldRender(_shouldRender: boolean) {
		this._shouldRender = _shouldRender;
	}

	public get shouldRender() {
		return this._shouldRender;
	}

	public set w(_w : number) {
		this._w = _w;
	}

	public get w() {
			return this._w;
	}

	public set h(_h : number) {
		this._h = _h;
	}

	public get h() {
		return this._h;
	}

	public set radian(_radian : number) {
			this.radian = _radian;
	}

	public get radian() {
			return this._radian;
	}

	public set x(_x : number) {
		this._x = _x;	
	}

	public get x() {
		return this._x;
	}

	public set y(_y : number) {
		this._y = _y;
	}

	public get y() {
		return this._y;
	}

	public set z(_z : number) {
		this._z = _z;
	}

	public get z() {
		return this._z;
	}

	public  toString() {
		return "state: {"
			+ "shouldRender: " + this.shouldRender + ","
			+ "x: " + this.x + ","
			+ "y: " + this.y + ","
			+ "z: " + this.z + ","
			+ "w: "  + this.w + ","
			+ "h: " + this.h
			+ "}";
	}
}
