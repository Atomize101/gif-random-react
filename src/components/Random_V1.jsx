import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
	// Component did mount ... first render
	useEffect(() => {
		const fetchGif = async () => {
			const url = `https://api.giphy.com/v1/gifs/random?api_key=rwtP5pLyt6ZSg0BdC4Gjmv105LH6lm9U`;
			const { data } = await axios.get(url); // Promise

			console.log(data);
		};
		fetchGif();
	}, []);
	return (
		<>
			<h1>Random</h1>
		</>
	);
};

export default Random;
