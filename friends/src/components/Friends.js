import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import styled from 'styled-components';
import Friend from './Friend';

function Friends () {
    const [friendsArray, setFriendsArray] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

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

    function addingFriend(e){
        e.preventDefault();
        setIsAdding(!isAdding);
    };

    function addNewFriend(e) {
        e.preventDefault();
        console.log('added new friend!');
    };

    return (
        <StyledFriendsContainer>
            <h1>Hello From Friends</h1>

            {
                !isAdding && (
                    <button onClick={addingFriend}>Add a new Friend</button>
                )
            }

            {
                isAdding && (
                    <div>
                    <form>

                        <div>
                        <input 
                        type='text'
                        name='newName'
                        placeholder='Name'/>
                        </div>

                        <div>
                        <input 
                        type='number'
                        name='newAge'
                        placeholder='Age'/>
                        </div>

                        <div>
                        <input 
                        type='email'
                        name='newEmail'
                        placeholder='Email'/>
                        </div>
                        <button onClick={addNewFriend}>Submit Friend</button>

                    </form>
                    <button onClick={addingFriend}>Cancel</button>
                    </div>
                )
            }

            <div>
                {
                    friendsArray.map((friend) => {
                        return (
                            <Friend key={friend.id} friend={friend} />
                        );
                    })
                }
            </div>
        </StyledFriendsContainer>
    );
};

export default Friends;

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
        margin-bottom: 3%;
    }
`;