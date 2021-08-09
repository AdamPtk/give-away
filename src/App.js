import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import HomeNav from './components/HomeNav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

function App() {
  return (
    <HashRouter>
      <HomeNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
