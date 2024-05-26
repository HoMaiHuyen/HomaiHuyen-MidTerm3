import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [repos, useParams] = useState({});

    const getUser = async (username) => {
        try {
            const response = await axios.get(
                `https://api.github.com/users/${username}`
            );
            const data = response.data;
            setUser(data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    // Function getUserRepos 17/22
}