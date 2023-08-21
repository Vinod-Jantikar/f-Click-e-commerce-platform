import { Provider } from "react-redux";
import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
