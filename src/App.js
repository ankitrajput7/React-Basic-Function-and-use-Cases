import ReactDOM from "react-dom/client";
import GenderSelection from "./components/Gender";
import List from "./components/List";
import { RouterProvider } from "react-router-dom";
import router from "./components/ReactRouterDOM/ReactRouterDOM";
import UseStateHook from "./components/Hooks/UseStateHook";
import UseEffectHook from "./components/Hooks/UseEffectHook";
import UseContextHook from "./components/Hooks/UseContextHook";
import ReduxDemo from "./components/redux/ReduxDemo";
import Carosal from "./components/Carosal";
import EventBubbling from "./components/EventBubbling";
import Events from "./components/Events";
import ShowAnotherComponent from "./components/ShowAnotherComponent";
import CounterClassComponent from "./components/classComponents/CounterClassComponent";
import Debouncing from "./components/Debouncing";
import Memoization from "./components/Memoization"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GenderSelection />);
