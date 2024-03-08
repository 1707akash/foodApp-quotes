

import './QuoteCard.css';
// import QuoteScreen from '../screen/QuoteScreen'; 

const QuoteCard =(props)=>{
    return(
        <div className='container'>
        <p>{props.description}</p>
        <span>{props.author}</span>
        <h3>Hii</h3>

        </div>
    )
}

export default QuoteCard;