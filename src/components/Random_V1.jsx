import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Random = () => {
	const [gif, setGif] = useState('');
	// Component did mount ... first render
	useEffect(() => {
		const fetchGif = async () => {
			const url = `https://api.giphy.com/v1/gifs/random?api_key=rwtP5pLyt6ZSg0BdC4Gjmv105LH6lm9U`;
			const { data } = await axios.get(url); // Promise

			const imageSrc = data.data.images.downsized_large.url;
			setGif(imageSrc);
		};
		fetchGif();
	}, []);
	return (
		<div>
			<h1>Random Gif</h1>
			<img width="500" src={gif} alt="Random Gif" />
		</div>
	);
};

export default Random;
