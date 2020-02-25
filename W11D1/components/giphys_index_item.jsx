import React from 'react';

// const giphyIndexItem = ({url, slug}) => {
const giphyIndexItem = ({gif}) => {
    // debugger
    return (
        <div className="gif-item">
            <img src={gif.url} alt={gif.slug}/>
        </div> 
    );
    
};

export default giphyIndexItem;