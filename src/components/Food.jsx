import React from 'react';

function Food(props) {

  return(
    <div>
      Food Level: {Math.round(props.foodLevel)}
      <br/>
      <button onClick={this.feed}>Feed Me</button>
    </div>
  );
}


export default Food;
