import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {

    state= {
        users: [
            {
            id: '1',
            login: 'bradtraversy',
            avatar_url: 'https://avatars2.githubusercontent.com/u/5550850?v=4',
            html_url: 'https://api.github.com/users/bradtraversy',
            },

            {
            id: '2',
            login: 'hello',
            avatar_url: 'https://avatars2.githubusercontent.com/u/5550850?v=4',
            html_url: 'https://api.github.com/users/bradtraversy',
            },

            {
            id: '3',
            login: 'hi',
            avatar_url: 'https://avatars2.githubusercontent.com/u/5550850?v=4',
            html_url: 'https://api.github.com/users/bradtraversy',
            },
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
                
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users
