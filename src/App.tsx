import { Route, Switch } from "wouter";
import exercises from "./tasks";
import { Exercise } from "./components/exercise";

export default function App() {
  return (
    <Switch>
      {exercises.map((exercise, idx) => {
        const exerciseId = idx + 1;
        return (
          <Route path={`/${exerciseId}`} key={exerciseId}>
            <Exercise {...exercise} exerciseId={exerciseId} />
          </Route>
        );
      })}
    </Switch>
  );
}
