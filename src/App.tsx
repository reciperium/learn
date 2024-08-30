import { Redirect, Route, Switch } from "wouter";
import exercises from "./tasks";
import { Exercise } from "./components/exercise";
import React from "react";

export default function App() {
  return (
    <Switch>
      {exercises.map((exercise, idx) => {
        const exerciseId = idx + 1;
        return (
          <React.Fragment key={exerciseId}>
            <Route path={`/${exerciseId}`} >
              <Exercise {...exercise} exerciseId={exerciseId} />
            </Route>
            {exercise.alias?.map((alias) => (
              <Route path={`/${alias}`} key={alias}>
                <Redirect to={`/${exerciseId}`} />
              </Route>
            ))}
          </React.Fragment>
        );
      })}
      <Redirect to="/1" />
    </Switch>
  );
}
