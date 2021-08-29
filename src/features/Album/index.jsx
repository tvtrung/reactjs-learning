import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const listAlbum = [
        {
            id:1,
            title:'Bài hát 1',
        },
        {
            id:2,
            title:'Bài hát 2',
        },
        {
            id:3,
            title:'Bài hát 3',
        }
    ];
    return (
        <div>
            <AlbumList list={listAlbum}/>
        </div>
    );
}

export default AlbumFeature;