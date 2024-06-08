import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
    const { users, text } = props;
    return (
        <div style={userStyle}>
            {users.map((user) => (
                <UserItem key={user.id} user={user} users={users} text={text} />
            ))}
        </div>
    );
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

export default Users;
