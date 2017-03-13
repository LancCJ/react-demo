/**
 * Created by LancCJ on 2017/3/13.
 */
require('normalize.css/normalize.css');
require('../../styles/App.css');

import React from 'react';

class LogoTitle extends React.Component {
  render() {
    return (
      <div className="container">
          LOGO标题
      </div>
    );
  }
}

LogoTitle.defaultProps = {

};

export default LogoTitle;
