import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChannelControl from "../ChannelControl/ChannelControl";
import ExerciseControl from "../ExerciseControl/ExerciseControl";
import Login from "../Login";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ExerciseControl />
        </Route>
        <Route exact path="/channel-control">
          <ChannelControl />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        {/* {privateRoutes.routes.map((el, index) => {
        return (
          <PrivateRoute key={index} {...el.props}>
            {el.component}
          </PrivateRoute>
        );
      })} */}
      </Switch>
    </>
  );
};
