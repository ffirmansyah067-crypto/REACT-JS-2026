export default function SlowComponent({ count }) {
    console.log("SlowComponent rendered");

    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += Math.sqrt(i * count);
    }
    return <h2>Ini Slow Component : {result}</h2>;
}
