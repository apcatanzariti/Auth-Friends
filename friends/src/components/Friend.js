import React from 'react';
import styled from 'styled-components';

function Friend ({ friend }) {
    return (
        <StyledFriendContainer>
            <StyledInfoDiv>Name: <b>{friend.name}</b></StyledInfoDiv>
            <StyledInfoDiv>Age: <b>{friend.age}</b></StyledInfoDiv>
            <StyledInfoDiv>Email: <b>{friend.email}</b></StyledInfoDiv>
        </StyledFriendContainer>
    );
};

export default Friend;

const StyledFriendContainer = styled.div`
    // border: solid 1px red;
    box-shadow: 0px 2px 5px #a7a7a7;
    padding: 6%;
    width: 100%;
    margin: 10% 0% 10% 0%;
`;

const StyledInfoDiv = styled.div`
    // border: solid 1px blue;
    padding: 3% 0% 3% 0%;
`;