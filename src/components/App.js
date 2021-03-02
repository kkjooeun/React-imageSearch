import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import Hearder from './Header';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
	const [images, setImages] = useState([]);

	const onSubmit = async (query) => {
		const url = '/search/photos'
		const res = await unsplash.get(url, {
			params : {
				query
			}
		});
		console.log(res);
		setImages(res.data.results);
	}

	return(
		<div className='ui container'>
			<Hearder/>
			<SearchBar onSubmit={onSubmit}/>
			Find : {images.length}
			<ImageList images={images}/>
		</div>
	)
}

export default App;