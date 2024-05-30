import './purpose.css'
import Icon from '../../assets/Images/Icon.png'
import Language from '../../assets/Images/language.png'
import Forum from '../../assets/Images/forum.png'
import Diversity from '../../assets/Images/diversity_4.png'
import Community from '../../assets/Images/communities.png'
import Library from '../../assets/Images/local_library.png'
import Cheer from '../../assets/Images/cheer.png'
function purpose() {
    return (
        <div className='purposeDiv p-3'>
          <div className="row purposeTitle text-center"><h3>Purposes of the District</h3></div>
          <div className="row d-flex justify-content-evenly">
            <div className='d-flex width-30 m-2'>
                <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Icon} alt="" /></div>
                <div>To provide an administrative structure with which to advance the Purpose of Lions Clubs International in this district.</div>
            </div>
            <div className='d-flex width-30'>
                <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Language} alt="" /></div>
                <div>To create and foster a spirit of understanding among the people of the world.</div>
            </div>
            <div className='d-flex width-30'>
                <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Forum} alt="" /></div>
                <div>To promote the principles of good government and good citizenship.</div>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly m-2">
            <div className='d-flex width-30'>
                <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Diversity} alt="" /></div>
                <div>To unite the members in the bonds of friendship, good fellowship a mutual understanding</div>
            </div>
            <div className='d-flex width-30'>
                <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Community} alt="" /></div>
                <div>To take an active interest in the civic, cultural, social and moral welfare of the community.</div>
            </div>
            <div className='d-flex width-30'>
                <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Library} alt="" /></div>
                <div>To provide a forum for the open discussion of all matters of public interest debated, however, that partisan politics and sectarian religious hall not by club member</div>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly">
<div className='d-flex width-30 m-2'>
    <div className="iconsDiv m-2 p-1 d-flex justify-content-center"><img src={Cheer} alt="" /></div>
    <div>To encourage service-minded people to serve their community withou personal financial reward, and to encourage efficiency and promote high ethical standards in commerce, industry, professions, public works and private endeavors.</div>
</div>
          </div>
        </div>
    );
}
export default purpose;