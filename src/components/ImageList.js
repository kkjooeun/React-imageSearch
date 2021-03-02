import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({images}) => {
	return(
		<div className='ui three column grid'>
			{images.map((image) => {
				return <ImageCard key={image.id} imageValue={image}/>
			})}
		</div>
	)
}

export default ImageList;