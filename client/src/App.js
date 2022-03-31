import React from "react";
import {useRoutes} from "./routes"
import {BrowserRouter} from "react-router-dom"
import { Header } from "./components/Header";


function App() {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="Content">
          {routes}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
