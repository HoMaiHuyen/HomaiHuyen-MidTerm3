import React from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const UserItem = (props) => {
    const { login, avatar_url } = props.user;
    const location = useLocation();

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
            <h3>{login}</h3>
            <div>
                <Link
                    to={{
                        pathname: `/user/${login}`,
                        state: { from: location.pathname, users: props.users, text: props.text }
                    }}
                    className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
};

export default UserItem;
