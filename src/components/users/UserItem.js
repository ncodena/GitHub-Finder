import React, { Component } from 'react'

export class UserItem extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         id: 'id',
    //         login: 'bradtraversy',
    //         avatar_url: 'https://avatars2.githubusercontent.com/u/5550850?v=4',
    //         html_url: 'https://api.github.com/users/bradtraversy',
    //     }
    // }



    render() {

        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className='card text-cemter'>
                <img src={avatar_url} alt='userAvatar' className='round-img' style={{width: '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
                
            </div>
        )
    }
}

export default UserItem
