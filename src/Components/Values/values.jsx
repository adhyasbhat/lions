import valuesImg from '../../assets/Images/value.png'
import './values.css';
function values(){
    return(
        <div className="values p-2">
        <div className="valuesImgDiv">
            <img src={valuesImg} alt="values" className='vauesIcon' />
        </div>
        <div className="valuesInfoDiv">
            <h3 className='my-3'>Values</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam nobis corporis, consequatur porro eveniet dolorum ex corrupti vero dolor voluptatibus quis unde blanditiis minus modi eius culpa sint facilis!</p> 
        </div>
    </div>  
    )
}
export default values;