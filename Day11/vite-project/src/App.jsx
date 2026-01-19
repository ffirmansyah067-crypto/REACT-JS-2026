import Calculator from "./components/LiftingStateUp";
import  PopDrilling from "./components/PopDrilling";
import StateSharing from "./components/StateSharing";
import CounterWithReducer from "./components/UseReducerHook";
import ContextApi from "./components/ContextApi";


function App() {
  return (
    <div>
      <Calculator />
      <PopDrilling />
      <StateSharing />
      <CounterWithReducer />
      <ContextApi />
    </div>
  );
}

export default App;
