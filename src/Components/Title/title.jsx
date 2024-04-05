import logo from '../../assets/Images/logo.png'
import '../Title/title.css'
function Title() {
    return (
        <header className="header">
            <img className='logo' src={logo} alt="logo" />
            <h1>LIONS CLUB OF BENGALURU CRYSTALS</h1>
        </header>
    );
}
export default Title;