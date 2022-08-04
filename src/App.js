import "./App.css";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import { useGlobalContext } from "./context";

function App() {
  return (
    <div className="main-container">
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
