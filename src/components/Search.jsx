import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
	const [text, setText] = useState('')

	const {setSearchTerm, fetchRandomMeal} = useGlobalContext()	
	const handleChange = (e) => {
		setText(e.target.value)
	}
	const handleSumbit = (e) => {
		e.preventDefault()
		if(text){
			setSearchTerm(text)
			setText('')
		}
	}

	const handleRandomMeal = () => {
		setSearchTerm('')
		setText('')
		fetchRandomMeal() 
	}

	return(
		<header className="search-container">
			<form onSubmit={handleSumbit}>
				<input type="text" placeholder="type favorite meal" value={text} className="form-input" onChange={handleChange} />
				<button type="submit" className="btn">Search</button>
				<button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise Me!</button>
			</form>
		</header>
	)
}
export default Search;