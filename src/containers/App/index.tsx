import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../images/logo.png';
import './App.scss';

import Filters from '../Filters';
import Content from '../Content';
import { getFlights } from '../../actions';
import { ThunkDispatch } from 'redux-thunk';

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    getFlights: () => dispatch(getFlights()),
  };
};

interface Props {
  getFlights: typeof getFlights;
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.props.getFlights();
  }

  render() {
    return (
      <div className="app">
        <div className="icon-container">
          <img className="top-icon" src={Logo} alt="Airplane" />
        </div>
        <Filters />
        <Content />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App)
