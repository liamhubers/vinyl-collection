import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import addVinyl from 'actions/addVinyl';

import Vinyl from 'components/Vinyl';

class Test extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    vinyl: PropTypes.object.isRequired,
  };

  handleAddVinyl() {
    const { name } = this.refs;

    this.props.dispatch(addVinyl(name.value));

    name.value = '';
  }

  render() {
    const { vinyl } = this.props;

    return (
      <div>
        <h1>Test</h1>

        <Vinyl vinyl={vinyl}/>

        <div>
          <input ref="name" placeholder="Typ naam..."/>
          <button onClick={this.handleAddVinyl.bind(this)}>Toevoegen</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { vinyl } = state;

  return { vinyl };
}

export default connect(mapStateToProps)(Test);
