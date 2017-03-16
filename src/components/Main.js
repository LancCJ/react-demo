require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
           Navbar,Nav,NavItem,NavDropdown,MenuItem,
           Grid,Row,Col,
           Tab
         }
from 'react-bootstrap'

import GsPage from './GsPage';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount(){

  }

  componentDidMount(){
    this.setState({

    })

  }

  changeData(id,num){
   new CountUp(id, 0, num, 0, 2.5, options).start();
  }

  handleSelect(selectedKey) {
    //console.log('selected ' + selectedKey)
  }

  render() {
    return (
        <div>



            <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight onSelect={this.handleSelect}>
                  <NavItem eventKey={1} href="#">Link</NavItem>
                  <NavItem eventKey={2} href="#">通知</NavItem>
                  <NavDropdown eventKey={3} title="管理员" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}><img  src='../images/info.png' className="small-icon"/> 信息管理</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.2}><img  src='../images/key.png' className="small-icon"/> 锁屏</MenuItem>
                    <MenuItem eventKey={3.3}><img  src='../images/shut.png' className="small-icon"/> 注销</MenuItem>
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

                          <br/>

                          <GsPage/>

                        </Tab.Pane>
                        <Tab.Pane eventKey="pda">
                          <br/>
                          PDA应用
                        </Tab.Pane>
                        <Tab.Pane eventKey="wgyj">
                          <br/>
                          违规预警
                        </Tab.Pane>
                        <Tab.Pane eventKey="pgis">
                          <br/>
                          Pgis
                        </Tab.Pane>
                        <Tab.Pane eventKey="yjcx">
                          <br/>
                          一键查询
                        </Tab.Pane>
                        <Tab.Pane eventKey="tb">
                          <br/>
                          通报
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Row>

              <br/>





            </Grid>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
