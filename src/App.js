import { Dashboard, Login } from "./components";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <Login type={'Admin'} />
      </Dashboard>
    </div>
  );
}

export default App;