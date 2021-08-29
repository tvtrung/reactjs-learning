import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import TodoFeature from "./features/Todo";
import Album from "./features/Album";
import Notfound from "./components/Notfound";
import productApi from "./api/productApi";

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/albums">Album</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" exact>
          <div>HomePage</div>
        </Route>
        <Route path="/todo">
          <TodoFeature />
        </Route>
        <Route path="/albums">
          <Album />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
