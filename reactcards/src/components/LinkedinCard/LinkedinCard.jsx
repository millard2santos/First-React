import Stars from '../Stars/Stars';
import './LinkedinCard.css'


const LinkedinCard = ({ people }) => {

    const { name, rating, gender, job, city } = people
    
    return (
        <div className="card">
            <p>{name}</p>
            <Stars rating={rating} />
            <p>{gender}</p>
            <p>{job}</p>
            <p>{city}</p>
        </div>)
}

export default LinkedinCard;