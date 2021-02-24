import NavBar from './components/NavBar';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <StyledContainer>

        <NavBar />

      <Switch>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/friends' component={Friends} />
            <Route path='/' component={HomePage}/>
        </Switch>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  // border: solid 1px red;
  text-align: center;
`;
