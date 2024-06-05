import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Users from "./Users";
import { searchUsers } from "../../api";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Search = () => {
    const history = useHistory();
    const query = useQuery();
    const [text, setText] = useState(query.get('q') || "");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (text) {
            SearchUsers(text);
        }
    }, []);

    const SearchUsers = async (text) => {
        try {
            const users = await searchUsers(text);
            setUsers(users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const clearUsers = () => {
        setUsers([]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            SearchUsers(text);
            history.push(`/?q=${text}`);
        }
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User"
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-success btn-block"
                />
            </form>
            {users.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}>
                    Clear
                </button>
            )}
            <Users users={users} />
        </div>
    );
};

export default Search;
