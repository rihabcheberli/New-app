import Login from "./components/Login/Login";
import App from "src/App" ;
import Register from "./components/Register/Register";
import {Route} from "react-router";

// eslint-disable-next-line react/jsx-no-undef
<Route exact path="/Login">
    <Login />
</Route>;

<Route exact path="/Home">
    <App />
</Route>;

<Route exact path="/Register">
    <Register />
</Route>;