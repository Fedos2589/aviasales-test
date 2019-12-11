import React from 'react';
import './Content.scss';

import Sort from '../../components/Sort';
import FlightList from '../../components/FlightList';

const Content: React.FC = () => {
  return (
    <div className="content">
      <Sort />
      <FlightList />
    </div>
  );
}

export default Content;
