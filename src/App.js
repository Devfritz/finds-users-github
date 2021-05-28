import { Route, Router } from 'react-router';
import './App.css';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';

function App() {
  return (
 
   <Router>
      <div>
        <Dashboard></Dashboard>
        <Login />
        <Error />
        <Route path="/" />
     </div>
   </Router>
     
  );
}

export default App;
