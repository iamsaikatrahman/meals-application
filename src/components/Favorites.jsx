import { useGlobalContext } from "../context";

const Favorites = () => {
	const {favorites, selectMeal, removeToFavorites} = useGlobalContext();
	return(
		<section className="favorites">
			<div className="favorites-content">
				<h5>Favorites</h5>
				<div className="favorites-container">
					{
						favorites.map((item)=>{
							const {idMeal, strMealThumb: image} = item;
							return(
								<div key={idMeal} className="favorite-item">
									<img src={image} alt={idMeal} className="favorites-img img" onClick={()=> selectMeal(idMeal, true)}/>
									<button className="remove-btn" onClick={()=> removeToFavorites(idMeal)}>Remove</button>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}
export default Favorites;