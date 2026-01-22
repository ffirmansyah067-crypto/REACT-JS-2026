import useCounter from "./useCounter";
import useToggle from "./useToggle";

export default function useCounterWithToggle(initialCount = 0, initialToggle = false) {
  const { count, increment, decrement, reset } = useCounter(initialCount);
  const [value, toggle] = useToggle(initialToggle);

  return { count, increment, decrement, reset, value, toggle };
}
