import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from './../utils/axiosWithAuth';

function NavBar () {

    const history = useHistory();

    const logOut = () => {
        //console.log('You logged out 👍');
        localStorage.removeItem('token');
        history.push('/login');
    };

    return(
    <StyledNav>
        <div><Link to='/'>Home Page</Link></div>
        <div><Link to='/login'>Login</Link></div>
        <div><Link to='/friends'>Friends</Link></div>
        <div><Link onClick={logOut}>Logout</Link></div>
    </StyledNav>
    );
};

export default NavBar;

const StyledNav = styled.div`
  border: solid 1px blue;
  display: flex;
  justify-content: center;

    div {
        margin: 2%;
    }
`;