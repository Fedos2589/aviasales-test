import React from 'react';
import './Filters.scss';

import FilterItem from '../../components/FilterItem';

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="filters__caption">Количество пересадок</div>

      <FilterItem />
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </div>
  );
}

export default Filters;
