import React from 'react';

// const giphyIndexItem = ({url, slug}) => {
const giphyIndexItem = ({gif}) => {
// const giphyIndexItem = (props) => {
    // debugger
    return (
        <div className="gif-item">
            <img src={gif.images.fixed_height.url} alt={gif.slug}/>
        </div> 
    );
    
};

export default giphyIndexItem;