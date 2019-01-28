import React from 'react';

const Gifs = props => {
    return(
        <li className="gif-wrapper">
            <div className="gif" style={{ backgroundImage: 'url(' + props.gifSource + ')' }} ></div>
            <button type="button"
                    onClick={props.gifSourceCopy}>
                Copy gif URL to clipboard
            </button>
        </li>
    )
}

export default Gifs;