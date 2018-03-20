export default {
    formatGrettingResponse() {
        const greetings = ["Hello there. How are you doing today?", "What's up buddy?", "Yeah nah. Hello mate"];
        return greetings[this.getRandomGreetingMsg(greetings)];
    },

    getRandomGreetingMsg(greetings) {
        return Math.floor(Math.random() * greetings.length);
    },
};
