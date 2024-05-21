import axios from "axios";
import React, { useState } from "react";
import Users from "./Users";
const Search = () => {
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);
    const SearchUsers = async (text) => {
        try {
            const response = await axios.get(
                `https://api.github.com/search/users?q=${text} `
            );
            setUsers(response.data.items);
        } catch (error) {
            console.error("Error fetching date:", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            SearchUsers(text);
            setText("");
        }
    };

    const onChange = (e) => setText(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search user" value={text} onChange={onChange}>
                </input>
                <input type="submit" value={Search} className="btn btn-success btn-block"></input>
            </form>
            <Users users={users} />
        </div>
    );
};

export default Search;