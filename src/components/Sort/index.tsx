import React from 'react';
import './Sort.scss';

import SortItem from '../SortItem';

const Sort: React.FC = () => {
  return (
    <div className="sort">
      <SortItem />
      <SortItem />
    </div>
  );
}

export default Sort;
