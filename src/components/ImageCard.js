import React from 'react';

const ImageCard = ({imageValue}) => {
	console.log(imageValue);
	return (
		<div class="column">
			<div class="ui fluid card">
				<div class="image">
					<img src={imageValue.urls.regular}/>
				</div>
				<div class="content">
					<a class="header">{imageValue.user.name}</a>
				</div>
			</div>
		</div>
	)
}

export default ImageCard;