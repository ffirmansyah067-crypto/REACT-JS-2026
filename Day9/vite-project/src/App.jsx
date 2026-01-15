import SimpleEffect from "./components/UseEffect";
import UserProfile from "./components/UseEffectArray";
import WindowSizeTracker from "./components/CleanUp";
import MultipleEffects from "./components/Multiple"; 
import FakeFetch from "./components/FetchData"; 

function App() {
  return (
    <div className="App">
      <h1>Day 3 Pekan 2</h1>
      <SimpleEffect />
      <UserProfile />
      <WindowSizeTracker />
      <MultipleEffects />
      <FakeFetch />
    </div>
  );
}


export default App;