import Carousels from '../../Components/Carousels/carousels.jsx'

import Dignitaries from '../Dignitaries/dignitaries.jsx'
import './home.css'
function home() {
    return (
        <>
        <Carousels />
        <div>
            <h3 className='text-center p-2'>Our principles</h3>
            <p className='text-center p-2'>Principles guiding our actions including empathy, equality and solidary, ensuring our efforts are rooted in compassion and respect for the deginity or equality individual</p>
            
        </div>
        <Dignitaries/>
        </>
    )
}
export default home;