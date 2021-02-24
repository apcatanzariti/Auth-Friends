import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import Friend from './Friend';

function DeleteFriend () {
    const [friendsArray, setFriendsArray] = useState([]);

    useEffect(() => {
        getFriends();
    }, []);

    function getFriends() {
        const token = JSON.parse(localStorage.getItem('token'));

        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            // console.log(res.data);
            setFriendsArray(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        // console.log(friendsArray);
    };

    function deleteFriend (id) {
        // console.log('friend deleted!');
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res => {
            setFriendsArray([
                ...res.data
            ])
        })
    };

    return (
        <StyledFriendsContainer>
            <h1>Delete Your Friends!</h1>
            <div>
                {
                    friendsArray.map((friend) => {
                        return (
                            <>
                            <Friend key={friend.id} friend={friend} />
                            <button onClick={() => deleteFriend(friend.id)}>Delete {friend.name}</button>
                            </>
                        );
                    })
                }
            </div>
        </StyledFriendsContainer>
    );
};

export default DeleteFriend;

const StyledFriendsContainer = styled.div`
    // border: solid 1px green;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 3% 0% 3% 0%;
        padding: 2%;
    }

    button {
        margin-bottom: -5%;
    }
`;