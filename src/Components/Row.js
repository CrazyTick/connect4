import React from 'react';
import '../Containers/Board/Board.css';

const Row = (props) => {


  return (
    <div className='row'>
      {
        props.row.map((element, colNumber) => {

          let color = '#FFFFFF';
          if(element === 1) {
            color = '#FFEA00';
          } else if(element === 2) {
            color = '#76FF03';
          }
          // console.log('row', element, color);
          return (
            <div
              key={colNumber}
              style={{...props.cellStyle, backgroundColor: color}}
              onClick={() => props.moved(props.rowNumber, colNumber)}/>
          );
        })
      }
    </div>
  );
};

export default Row;
