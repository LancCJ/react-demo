require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem,
  Grid, Row, Col,
  Tab,
  OverlayTrigger, Popover,
  ButtonGroup, Button,
}
  from 'react-bootstrap'

//自定义组件
import GsPage from './GsPage';
import PdaPage from './PdaPage';
import WgyjPage from './WgyjPage';
import PgisPage from './PgisPage';
import YjcxPage from './YjcxPage';
import TbPage from './TbPage';


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
)

const popoverBottom = (
  <Popover id="popover-positioned-bottom">
    {buttonGroupInstance}
  </Popover>
)


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.setState({})

  }

  changeData(id, num) {
    new CountUp(id, 0, num, 0, 2.5, options).start();
  }

  handleSelect(selectedKey) {
    //console.log('selected ' + selectedKey)
  }

  render() {
    return (
      <div>

        <Navbar  collapseOnSelect  fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight onSelect={this.handleSelect}>
              <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverBottom}>
                <NavItem eventKey={1} href="#">
                    <img src='../images/item_w.png' className="small-icon"/>
                </NavItem>
              </OverlayTrigger>
              <NavItem eventKey={2} href="#">通知</NavItem>
              <NavDropdown eventKey={3} title='管理员' id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}><img src='../images/info.png' className="small-icon"/> 信息管理</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.2}><img src='../images/key.png' className="small-icon"/> 锁屏</MenuItem>
                <MenuItem eventKey={3.3}><img src='../images/shut.png' className="small-icon"/> 注销</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row className="show-grid">
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="gs">
              <Row className="clearfix">
                <Col sm={12}>
                  <Nav bsStyle="pills">
                    <NavItem eventKey="gs">
                      概述
                    </NavItem>
                    <NavItem eventKey="pda">
                      PAD应用
                    </NavItem>
                    <NavItem eventKey="wgyj">
                      违规预警
                    </NavItem>
                    <NavItem eventKey="pgis">
                      Pgis
                    </NavItem>
                    <NavItem eventKey="yjcx">
                      一键查询
                    </NavItem>
                    <NavItem eventKey="tb">
                      通报
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="gs">
                      <GsPage/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pda">
                      <PdaPage/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="wgyj">
                      <WgyjPage/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pgis">
                      <PgisPage/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="yjcx">
                      <YjcxPage/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tb">
                      <TbPage/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Row>
        </Grid>

      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
