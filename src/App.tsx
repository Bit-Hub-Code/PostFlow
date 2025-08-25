import "./App.css";
import Feed from "./components/Feed/Feed";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Feed />
      </main>
    </>
  );
}

export default App;
