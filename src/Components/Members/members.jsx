import { membersData } from '../membersData';

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
        <div key={rowIndex} className='d-flex justify-content-between'>
          {/* Map over each row of members */}
          {row.map((item, index) => (
            <div key={index} className='member p-3 m-3'>
              <div className='d-flex justify-content-between'>
                <div>
                  <div className='d-flex align-items-center'>
                    <img className='memberIcon mx-2' src={item.photo} alt="" />
                    <h6>{item.name}</h6>
                  </div>
                  <div>
                    <div>{item.phone}</div>
                    <div>{item.occupation}</div>
                  </div>
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
