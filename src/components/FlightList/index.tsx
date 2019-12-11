import React from 'react';
import './FlightList.scss';

import Flight from '../Flight';

const FlightList: React.FC = () => {
  return (
    <div className="flightList">
      <Flight />
      <Flight />
      <Flight />
      <Flight />
    </div>
  );
}

export default FlightList;
