import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Routers from "./routes/Routers";
import ROUTES from "./routes/RouteConstants";

function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="App">
      {pathname !== ROUTES.REGISTER &&
        pathname !== ROUTES.LOGIN &&
        pathname !== ROUTES.REST_PASSWORD && <Header />}

      <Routers />
    </div>
  );
}

export default App;
