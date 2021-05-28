import { Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';

function App() {
  return (
 
   <Router>
     <Switch>

        <Route path='/' exact>
          <Dashboard></Dashboard>
        </Route>

         <Route path="/login" exact>
              <Login />
          </Route>

          <Route path='*'>
            <Error />
          </Route>
     </Switch>
     
        
   </Router>
     
  );
}

export default App;
