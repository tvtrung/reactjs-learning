import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';
AlbumList.propTypes = {
    
};

function AlbumList(props) {
    const {list} = props;
    return (
        <div>
            {list.map((item)=>(
                <Album item={item}/>
            ))}
        </div>
    );
}

export default AlbumList;