import { Event } from "./events/common/Event";
import CS from "./states/CS";
import CT from "./thinking/common/CT";

export default class Wallfacer {
    constructor(
        private state : CS,
        private thinking : CT,
    ) {}

    public getThinking() {
        return this.thinking
    }

    public getState() {
        return this.state
    }

    public publish(e: Event) {
        this.thinking.publish(e)
    }
}