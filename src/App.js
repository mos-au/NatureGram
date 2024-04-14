import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
