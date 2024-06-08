import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
    return (
        <div style={repoStyle}>
            {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo} />
            ))}
        </div>
    );
};

const repoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;
