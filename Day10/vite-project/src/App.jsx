import FetchDataComponent from "./components/FetchApi";
import FetchAxios from "./components/FerchAxios";
import DataFetcher from "./components/ AbortController";
import UserList from "./components/ManupulasiDom";

function App() {
  return (
    <div className="App">
      <h1>Day 4 Pekan 2</h1>
      <FetchDataComponent />
      <FetchAxios />
      <DataFetcher />
      <UserList />
    </div>
  );
}

export default App;
