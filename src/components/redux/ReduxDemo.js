import { Provider } from "react-redux";
import store from "./store";
import User from "./reduxComponents/User";

function ReduxDemo() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default ReduxDemo;
