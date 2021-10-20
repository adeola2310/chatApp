import React, {lazy, Suspense} from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import LayoutContainer from "../container/Layout/Layout";

const ChatPage = lazy(() => import("../page/Chat/Chat"));

const history = createBrowserHistory();

const Routes = () => {

    return (
        <Router history={history}>
            <LayoutContainer>
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route
                            exact path="/"
                           component={ChatPage}
                        />
                    </Suspense>
                </Switch>
            </LayoutContainer>
        </Router>
    );
};

export default Routes;
