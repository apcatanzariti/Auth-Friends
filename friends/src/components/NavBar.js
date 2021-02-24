import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

function NavBar () {

    const history = useHistory();

    const logOut = () => {
        //console.log('You logged out 👍');
        localStorage.removeItem('token');
        history.push('/login');
    };

    return(
    <StyledNav>
        <StyledLink><Link to='/'>Home Page</Link></StyledLink>
        <StyledLink><Link to='/login'>Login</Link></StyledLink>
        <StyledLink><Link to='/friends'>Friends</Link></StyledLink>
        <StyledLink><Link onClick={logOut}>Logout</Link></StyledLink>
    </StyledNav>
    );
};

export default NavBar;

const StyledNav = styled.div`
  //border: solid 1px #006eff;
  border: solid 2px black;
  display: flex;
  justify-content: center;

    a {
        // border: solid 1px black;
        //color: #006eff;
        color: black;
        text-decoration: none;
        font-size: 1.3em;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const StyledLink = styled.div`
    // border: solid 1px pink;
    margin: 2%;
`;