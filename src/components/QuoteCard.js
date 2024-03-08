

import './QuoteCard.css';
// import QuoteScreen from '../screen/QuoteScreen'; 

const QuoteCard =(props)=>{
    return(
        <div className='container'>
        <p>{props.description}</p>
        <span>{props.author}</span>

        </div>
    )
}

export default QuoteCard;