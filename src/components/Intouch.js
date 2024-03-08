



import Button from './Button';
import './Intouch.css';
import house from './house.PNG';

const Intouch = () =>{
    return (
        <>
        <div className="houseBox">
            <div className="imageBox">
            <img src={house} alt="house" />
            </div>
            <div className="textLorem">
                <div className="innerDiv">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</span>
                <br />
                <br />
                <Button height={"2.5rem"} width={"10rem"} borderRadius={"4px"} fontColor={"#fff"} backgroundColor={"#1c4ed8"} padding={"0.6rem 1rem"} >Know More</Button>
                </div>
            </div>
        </div>
            
        </>
    );
}

export default Intouch;