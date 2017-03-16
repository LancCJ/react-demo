/**
 * Created by LancCJ on 2017/3/16.
 */
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
import {
  Row,Col,
  Badge
}
  from 'react-bootstrap'


class WgyjPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount(){

  }

  componentDidMount(){

  }



  render() {
    return (
      <div>
        <br/>

        <Row bsClass="row row-background">
          <Col lg={12}  md={12} sm={12} xs={12}>
            违规预警
          </Col>
        </Row>
      </div>
    );
  }
}

WgyjPage.defaultProps = {
};

export default WgyjPage;
