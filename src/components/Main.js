

import Button from './Button';
import './Main.css'
const Main = () =>{
    return(
        <>
        <div className="bg">
            <div className="textBox">
            <h1>Let us find your <span className="red-heading">Forever Food.</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et harum necessitatibus ut culpa!</p>
            <div className="btns">
            <Button height={"2.5rem"} width={"10rem"} borderRadius={"4px"} fontColor={"#FFF"} backgroundColor={"#e11d48"} padding={"0.6rem 1rem"} >Search Now</Button>
            <Button height={"2.5rem"} width={"10rem"} borderRadius={"4px"} fontColor={"#e11d48"} backgroundColor={"#fff"} padding={"0.6rem 1rem"} >Know More</Button>
            </div>
            </div>
        </div>
        </>
    );
}

export default Main;