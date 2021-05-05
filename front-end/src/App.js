import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import HomeMaster from "./components/start/StartMaster";
import LoginMaster from "./components/login/LoginMaster";
import HomePage from "./components/home/HomePage";
import ChangeAvatar from "./components/changeAvatar/ChangeAvatar";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route component={HomeMaster} path="/home" exact/>
                <Route component={LoginMaster} path="/login" exact/>
                <Route component={HomePage} path="/homePage" exact/>
                <Route component={ChangeAvatar} path="/changeAvatar" exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
