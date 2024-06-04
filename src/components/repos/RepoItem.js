import React from "react";
import PropTypes from "prop-types";

const RepoItem = (props) => {
    const { name, html_url, description } = props.repo;

    return (
        <div className="card text-center">
            <h3>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {name}
                </a>
            </h3>
            <p>{description}</p>
        </div>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItem;
