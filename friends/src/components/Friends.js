import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Friend from './Friend';

function Friends () {
    const [friendsArray, setFriendsArray] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState('');
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

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

    function handleChange(e) {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    function addingFriend(e){
        e.preventDefault();
        setIsAdding(!isAdding);
    };

    function addNewFriend(e) {
        e.preventDefault();
        // console.log('added new friend!');
        if (newFriend.name === '' || newFriend.age === '' || newFriend.email === '') {
            setError('One or more fields blank.')
        } else {
            axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                setFriendsArray([
                    ...res.data
                ])
                setNewFriend({
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
        }
    };

    return (
        <StyledFriendsContainer>
            <h1>Hello From Friends</h1>

            {
                !isAdding && (
                    <div>
                    <button onClick={addingFriend}>Add a new Friend</button>
                    <div><Link to='/delete-friend'>Delete Friends?</Link></div>
                    </div>
                )
            }

            {
                isAdding && (
                    <div>
                    <form onSubmit={addNewFriend}>

                        <div>
                        <input 
                        type='text'
                        name='name'
                        value={newFriend.name}
                        onChange={handleChange}
                        placeholder='Name'/>
                        </div>

                        <div>
                        <input 
                        type='number'
                        name='age'
                        value={newFriend.age}
                        onChange={handleChange}
                        placeholder='Age'/>
                        </div>

                        <div>
                        <input 
                        type='email'
                        name='email'
                        value={newFriend.email}
                        onChange={handleChange}
                        placeholder='Email'/>
                        </div>
                        <button>Submit Friend</button>

                    </form>
                    <button onClick={addingFriend}>Cancel</button>
                    <div>{error}</div>
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