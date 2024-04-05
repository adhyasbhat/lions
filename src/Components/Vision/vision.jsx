import './vision.css';
import vissionImg from '../../assets/Images/vissionImg.png'
function vission(){
    return(
        <div className="vission p-2">
        <div className="vissionImgDiv">
            <img src={vissionImg} alt="vission" className='vissionIcon' />
        </div>
        <div className="vissionInfoDiv">
            <h3 className='my-3'>Vission</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quam nobis corporis, consequatur porro eveniet dolorum ex corrupti vero dolor voluptatibus quis unde blanditiis minus modi eius culpa sint facilis!</p>
        </div>
    </div>
    )
}
export default vission;