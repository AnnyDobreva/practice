import{BsBagCheck} from 'react-icons/bs';
import{AiOutlineStar} from 'react-icons/ai';

function Card({img,title,star,reviews,newPrice,prevPrice}) {
  return (
    <section className="card">
    <img src ={img}
         alt={title}
         className='card-img'
    /> 
    <div className="card-details">
      <h3 className="card-title">{title}</h3>
      <h6 className='card-description'>Loren ipson</h6>
      <section className="card-reviews">
       {star}{star}{star}{star}
        <span className='total-reviews'>{reviews}</span>
      </section>

      <section className='card-price'>
        <div className='price'>
          <del>{prevPrice}</del>{newPrice}
        </div>
        <div className='bag'>
      
          <BsBagCheck className='bag-icon' onClick={() => alert('Add to bag')} />
        </div>
      </section>
    </div>
    
   
  </section>
  )
}
export default Card;
