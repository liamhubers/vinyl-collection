import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import 'assets/less/template.less';

const style = {
  template: {
    padding: '50px',
  },
};

const Template = ({ children }) => {
  return (
    <div style={style.template}>
      <Link to="/">Home</Link> <Link to="/test">Test</Link>
      {children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.any,
};

export default Template;
