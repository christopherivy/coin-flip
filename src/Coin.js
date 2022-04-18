import React from 'react';
import "./Coin.css";


// the coin has 2 props, imgSrc and side

function Coin (props) {
	return (
		<div className="Coin">
			<img src={ props.imgSrc } alt={ props.side } />
		</div>
	);
}


export default Coin;