import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const App = () => {
	const [images, setImages] = useState([]);

	const onSubmit = async (query) => {
		const url = 'https://api.unsplash.com/search/photos'
		const res = await axios.get(url, {
			params : {
				query
			},
			headers: {
				Authorization : 'Client-ID 12fNUeS0axgg8SEeJpBoJpOSLF_uNk-JSwKmWSYaBS8'
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