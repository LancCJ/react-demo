require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {OverlayTrigger,Button,Popover,ButtonGroup} from 'react-bootstrap';
//API
import API from '../config/api';

//自定义组件
const buttonGroupInstance = (
  <ButtonGroup vertical>
    <Button bsStyle="link">主页</Button>
    <Button bsStyle="link">社区</Button>
    <Button bsStyle="link">治安</Button>
    <Button bsStyle="link">巡逻</Button>
    <Button bsStyle="link">交通</Button>
    <Button bsStyle="link">禁毒</Button>
  </ButtonGroup>
);

const popoverBottom = (
  <Popover id="popover-positioned-bottom" >
    {buttonGroupInstance}
  </Popover>
);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="topbar">
          <div className="logotitle">
            <img  src={API.logourl} className="logoimage"/>&#12288;react-bootstrap
          </div>
          <div className="infotool">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
              <Button bsStyle="link" >
                <img  src='../images/item.png' className="icon"/>&#12288;&#12288;
              </Button>
            </OverlayTrigger>
            <img  src='../images/ring.png' className="icon"/>通知&#12288;
            <img  src='../images/user.png' className="icon"/>管理员</div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
