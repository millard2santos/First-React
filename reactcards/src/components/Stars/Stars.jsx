import './Stars.css'


const Stars = ({rating}) => {
    return (
        <div className="stars">
            <i className={rating >= 1 ? 'fa-solid fa-star': 'fa-regular fa-star'}></i>
            <i className={rating >= 2 ? 'fa-solid fa-star': 'fa-regular fa-star'}></i>
            <i className={rating >= 3 ? 'fa-solid fa-star': 'fa-regular fa-star'}></i>
            <i className={rating >= 4 ? 'fa-solid fa-star': 'fa-regular fa-star'}></i>
            <i className={rating >= 5 ? 'fa-solid fa-star': 'fa-regular fa-star'}></i>
        </div>
    )
}

export default Stars;