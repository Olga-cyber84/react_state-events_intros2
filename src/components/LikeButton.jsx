import React from 'react'
import PropTypes from 'prop-types'

function LikeButton(props) {
    let clicks = 0;
    const handleClick = evt => {
        console.log(evt);
        clicks++;
        };
    return ( <button onClick={handleClick}>Click me: {clicks}</button> );
}

LikeButton.propTypes = {

}

export default LikeButton

