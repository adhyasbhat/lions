import logo from '../../assets/Images/logo.png'
import './footer.css'
function footer(){
return(
    <div className='footer'>
        <div>
            <img src={logo} alt="" srcset="" />
        </div>
        <div className='footerDetails'>
        <table>
            <thead>
                <tr>
                    <th>Home</th>
                    <th>More</th>
                    <th>Connect</th>
                </tr>
            </thead>
        </table>

        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
)
}
export default footer;