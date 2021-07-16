import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import * as sessionActions from "./store/session";
import SignupFormPage from './components/SignupForm';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm/LoginForm';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

 
  return isLoaded && (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
    <Switch>
      <route path='/login'>
        <LoginForm />
      </route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
    </Switch>
    )}
    </>
  );
}

export default App;
