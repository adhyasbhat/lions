import Carousels from '../../Components/Carousels/carousels.jsx'
import Mission from '../../Components/Mission/mission.jsx'
import Values from '../../Components/Values/values.jsx'
import Vission from '../Vision/vision.jsx'
function home() {
    return (
        <>
        <Carousels />
        <div>
            <h3>Our principles</h3>
            <p>Principles guiding our actions including empathy, equality and solidary, ensuring our efforts are rooted in compassion and respect for the deginity or equality individual</p>
            <div className='d-flex justify-content-center'>
                <Vission />
                <Mission />
                <Values />
            </div>
        </div>
        </>
    )
}
export default home;