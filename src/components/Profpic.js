import './Profpic.css';
import profile from './profile.avif';

const Profpic = () =>{
    return(
        <>
        <div className="prof">
        <img className="photo" src={profile} alt="" />
        <div className="names">
            <h5>Gladis Lennon</h5>
            <span>Head of SEO</span>
        </div>
        </div>
        </>
    );  
}

export default Profpic;