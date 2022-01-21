import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Navbar from './component/home/NavMenu';
const HomePage = lazy(() => import('./component/GetTodo/GetTodo'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
