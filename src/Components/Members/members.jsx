import React from 'react';
import { membersData } from '../membersData';
import Card from 'react-bootstrap/Card';
function Members() {
  // Chunk the membersData into arrays of 5 members each
  const chunkedMembers = membersData.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 5);
    
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    
    resultArray[chunkIndex].push(item);
    
    return resultArray;
  }, []);

  return (
    <div>
      {/* Map over the chunked membersData */}
      {chunkedMembers.map((row, rowIndex) => (
        <div key={rowIndex} className='d-flex justify-content-evenly'>
          {/* Map over each row of members */}
          {row.map((item, index) => (
            <div key={index} className='member p-3 m-3'>
              <div className='d-flex justify-content-between'>
                <div>
                  
                  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.photo} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.phone}
        </Card.Text>
        <Card.Text>{item.occupation}</Card.Text>
      </Card.Body>
    </Card>
                </div>
              </div>
            </div>
          ))}
          {/* Add empty placeholders if there are less than 5 members in the row */}
          {row.length < 5 && (
            Array.from({ length: 5 - row.length }).map((_, placeholderIndex) => (
              <div key={placeholderIndex} className='member p-3 m-3'></div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default Members;
