import React, { Fragment, Component } from 'react';
import Spinner from '../../layouts/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {

        const {name, avatar_url, location, email, bio, blog, company, login, html_url, followers, following, public_repos, public_gists, hireable} = this.props.user;

        const {loading} = this.props;

        // console.log(this.props.user)

        if(loading) return <Spinner/>

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'> Back to search</Link>
                Hireable: {' '}

                {hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="avatar_url" className="round-img" style={{width: '150px'}}/> 
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile <i className="fab fa-github"></i></a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong>{login}
                                    </Fragment>}
                            </li>
                            <li>
                                {email && <Fragment>
                                    <strong>Email: </strong>{email}
                                    </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong>{company}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong>{blog}
                                    </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}

export default User;