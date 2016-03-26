import React, { Component, PropTypes } from 'react';

const style = {
  vinyl: {
    backgroundColor: 'red',
    overflow: 'hidden',
    float: 'left',
  },
  item: {
    padding: '15px',
    float: 'left',
  },
};

class Vinyl extends Component {
  static propTypes = {
    vinyl: PropTypes.object.isRequired,
  }

  render() {
    const { vinyl } = this.props;

    return (
      <div style={style.vinyl}>
        {(() => {
          return vinyl.items.map((item, index) => {
            return (
              <div key={index} style={style.item}>
                Vinyl: {item.name}
              </div>
            );
          });
        })()}
      </div>
    );
  }
}

export default Vinyl;
