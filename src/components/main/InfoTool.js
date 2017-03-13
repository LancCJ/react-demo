/**
 * Created by LancCJ on 2017/3/13.
 */
require('normalize.css/normalize.css');
require('../../styles/App.css');

import React from 'react';

class InfoTool extends React.Component {
  render() {
    return (
      <div className="container">
         登录信息工具栏
      </div>
    );
  }
}

InfoTool.defaultProps = {

};

export default InfoTool;
