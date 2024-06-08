import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Users from "./Users";
import { searchUsers } from "../../api";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const query = useQuery();
    const [text, setText] = useState(query.get('q') || location.state?.text || "");
    const [users, setUsers] = useState(location.state?.users || []);

    useEffect(() => {
        if (text && users.length === 0) {
            SearchUsers(text);
        }
    }, []);

    const SearchUsers = async (searchText) => {
        try {
            const users = await searchUsers(searchText);
            setUsers(users);
            history.push(`/?q=${searchText}`, { users, text: searchText });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const clearUsers = () => {
        setUsers([]);
        setText("");
        history.push(`/`);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            SearchUsers(text);
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
            <Users users={users} text={text} />
        </div>
    );
};

export default Search;
