import Carousels from '../../Components/Carousels/carousels.jsx'
import Mission from '../../Components/Mission/mission.jsx'
import Vision from '../../Components/Vision/vision.jsx'
import Vlues from '../../Components/Values/values.jsx'
function home() {
    return (
        <>
        <Carousels />
        <div className='d-flex justify-content-evenly'>
        <Mission/>
        <Vision/>
        <Vlues/>
        </div>
       
        </>
    )
}
export default home;