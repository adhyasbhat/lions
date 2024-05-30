import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import {objectivitiesData} from '../objectitivies';
import './objectivies.css';

function objectivies() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
    <div className='ObjTitle text-center'>
    <h3>The objects of this association</h3>
      </div>
      
        <div className='caroselDiv'>
        <Carousel responsive={responsive} infinite={true}>
          {objectivitiesData.map((item) => (
            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Text>
              {item.title}
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
        </Carousel>
      </div>
      
    </div>
  
  );
}
export default objectivies;