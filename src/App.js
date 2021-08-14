import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import HomeNav from './components/HomeNav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import GiveAway from './components/GiveAway';
import NotFound from './components/NotFound';

import {AuthProvider} from "./components/contexts/AuthContext";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <HomeNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
          <Route path='/give-away' component={GiveAway} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
