import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization : 'Client-ID 12fNUeS0axgg8SEeJpBoJpOSLF_uNk-JSwKmWSYaBS8'
	}
})