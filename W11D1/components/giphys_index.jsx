import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const giphyIndex = ({gifs}) => {
    const gifsToRender = gifs.map( gif => 
        <GiphysIndexItem key={gif.id} gif={gif}/>
    );

    return(
        <div className="gif-index"> 
             {gifsToRender}
        </div>
    );
}

export default giphyIndex;