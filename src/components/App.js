import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

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
			<SearchBar onSubmit={onSubmit}/>
		</div>
	)
}

export default App;