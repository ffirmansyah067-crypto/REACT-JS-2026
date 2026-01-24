export default function MediumComponent() {
    console.log("MediumComponent rendered");

    const result = Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
    return <h2>Ini Medium Component : {result}</h2>;
}
