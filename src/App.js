import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' component={Landing}/>
          <Route exact path='/landing' component={Landing}/>
        </Switch>

      </div>
     </Router>
  );
}

export default App;
