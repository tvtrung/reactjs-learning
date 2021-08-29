import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
Album.propTypes = {
    item: PropTypes.object.isRequired
};

function Album(props) {
    const {item} = props;
    return (
        <li>
            {item.title}
        </li>
    );
}

export default Album;