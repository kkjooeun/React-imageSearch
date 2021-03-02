import React from 'react';

const ImageCard = ({imageValue}) => {
	console.log(imageValue);
	return (
		<div class="column">
			<div class="ui fluid card">
				<div class="image">
					<img src="/images/avatar/large/daniel.jpg"/>
				</div>
				<div class="content">
					<a class="header">Daniel Louise</a>
				</div>
			</div>
		</div>
	)
}

export default ImageCard;