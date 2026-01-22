import React from "react";
import ModalToggleButton from "./components/ModalToggleButton";
import SwitchButton from "./components/SwitchButton";
import Post from "./components/Post";
import CounterToggleDemo from "./components/CounterToggleDemo";
import UserForm from "./components/UserForm";
import ThemeSwitcher from "./components/ThemeSwitcher";
import UseNameForm from "./components/UserNameForm";

function App() {
  return (
    <div>
      <h1>Percobaan useToggle Hook</h1>
      <ModalToggleButton />
      <SwitchButton />
      <h1>Test useFetch Hook</h1>
      <Post />
      <h1>Testi Hooks Composition</h1>
      <CounterToggleDemo />
      <h1>Demo useForm Hook</h1>
      <UserForm />
      <h1>Demo useLocalStorage Hook</h1>
      <ThemeSwitcher />
      <UseNameForm />
    </div>
  );
}

export default App;
