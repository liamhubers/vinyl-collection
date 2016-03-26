import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Vinyl from 'components/Vinyl';

const Test = ({ vinyl }) => {
  return (
    <div>
      <h1>Test</h1>

      <Vinyl vinyl={vinyl}/>
    </div>
  );
};

Test.propTypes = {
  vinyl: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { vinyl } = state;

  return { vinyl };
}

export default connect(mapStateToProps)(Test);
