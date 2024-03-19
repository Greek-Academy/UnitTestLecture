// Light.ts

enum LightState {
	OFF = "OFF",
	ON = "ON"
}

class Light {
	private state: LightState;

	constructor() {
		this.state = LightState.OFF;
	}

	public getState(): LightState {
		return this.state;
	}

	public turnOn(): void {
		this.state = LightState.ON;
	}

	public turnOff(): void {
		this.state = LightState.OFF;
	}
}

export { Light, LightState };
