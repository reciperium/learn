import { Redirect, Route, Switch, useLocation } from "wouter";
import exercises from "./tasks";
import { Exercise } from "./pages/exercise";
import { End } from "./pages/end";
import React, { useEffect } from "react";

export default function App() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      {exercises.map((exercise, idx) => {
        const exerciseId = idx + 1;
        return (
          <React.Fragment key={exerciseId}>
            <Route path={`/task/${exerciseId}`}>
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
      <Route path="/end">
        <End />
      </Route>
      <Redirect to="/task/1" />
    </Switch>
  );
}
