export default function CounterButton({ count, onIncrease }) {
  return (
    <button onClick={onIncrease}>
      Count = {count} + 1;
    </button>
  );
}
