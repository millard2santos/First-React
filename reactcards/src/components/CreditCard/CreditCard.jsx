import './CreditCard.css'
import visa from '../../assets/Visa.png'
import masterCard from '../../assets/Mastercard.png'


const CreditCard = ({ type, number, exMonth, exYear, bank, owner, cssClass }) => {
    return (
    <div className={cssClass}>
        <img src={type === 'visa' ? visa : masterCard} alt="" className='img'/>
        <p className='number'><span>**** **** ****</span> {number.toString().slice(12)}</p>
        <div className='text'>
            <p>Expires {exMonth}/{exYear.toString().slice(2)}</p>
            <p>{bank}</p>
        </div>
        <p className='owner'>{owner}</p>
    </div>
    )
}

export default CreditCard;