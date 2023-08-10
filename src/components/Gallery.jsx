// Imports
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "../context";

// Component
const Gallery = () => {

	// Unsplash URL
	const url = `https://api.unsplash.com/search/photos?&client_id=${ import.meta.env.VITE_UNSPLASH_API_KEY }`;

	// Context
	const { searchTerm } = useAppContext();

	// React-Query
	const { isLoading, isError, data } = useQuery({
		// Everytime searchTerm is changed, it's added to React-Query cache
		// and React-Query re-fetch the images only if search is not in cache,
		// But React-Query re-fetch behind the scene to see if there something new
		// And if it's true show new images ;-)
		queryKey:['images', searchTerm],
		queryFn:async() => {
			const response = await axios.get(`${ url }&query=${ searchTerm }`);
			return response.data;
		},
	});

	// Returns
	if (isLoading){
		return(
			<section className="image-container">
				<h3>Loading...</h3>
			</section>
		);
	}
	if (isError){
		return(
			<section className="image-container">
				<h3>There was an error...</h3>
			</section>
		);
	}
	if (data.results.length < 1){
		return(
			<section className="image-container">
				<h3>No result found...</h3>
			</section>
		);
	}
	return(
		<section className="image-container">
			{
				data.results.map((item) => {
					const { id, urls:{ small }, alt_description } = item;
					return <img key={ id } src={ small } alt={ alt_description } className="img"/>
				})
			}
		</section>
	);

};

// Export
export default Gallery;