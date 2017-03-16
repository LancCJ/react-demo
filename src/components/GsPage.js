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

const options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
}

const option = {
  //animation:false,
  title: {
    text: '工作量统计',
    textStyle:{
      fontSize:'10'
    },
    left:0,
    top:0,
    padding:0,
    itemGap:0,
    show:true
  },
  tooltip: {},
  legend: {
    bottom:0,
    right:0,
    itemWidth:4,
    itemHeight:4,
    itemGap:0,
    textStyle:{
      fontSize:'6'
    },
    data:['统计项1','统计项2','统计项3','统计项4','统计项5']
  },
  grid: {
    height:'80%',
    top:'10%',
    left:'1%',
    containLabel: true
  },
  xAxis : [
    {
      data : ['统计项1','统计项2','统计项3','统计项4','统计项5'],
      axisLabel:{
        textStyle: {
          fontSize: 10  //刻度大小
        }
      }
    }
  ],
  yAxis: {},
  series: [
    {
      type:'bar',
      barWidth: '60%',
      data:[10, 52, 200, 334, 390]
    }
  ]
};

class GsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount(){

  }

  componentDidMount(){
    this.setState({
      barOption:option
    })

    this.changeData('isworking','1000')
    this.changeData('onlinepolice','1401')
    this.changeData('infotoday','200')
    this.changeData('infomounth','2200')
    this.changeData('infototal','3200')
    this.changeData('noticetoday','2200')
    this.changeData('noticemounth','3200')
    this.changeData('noticetotal','9200')

    setTimeout(()=>{
      this.changeData('isworking','5000')
    },5000)
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
        <br/>

        <Row className="show-grid">
          <Col lg={4}  md={4} sm={12} xs={12}>
            <div className="infoTab" style={{background:'#417DDD'}}>
              <div className="infoTab-top-blue">
                <div className="verticalCenter">
                  <img  src='../images/date_w.png' className="icon"/>
                  <span> 勤务工作</span>
                </div>
              </div>
              <div >
                <div className="float-left infoTab-half infoTab-border-blue">
                  <div className="verticalCenter">
                    <div id="isworking">--</div>
                    <div>在线工作</div>
                  </div>
                </div>
                <div className="float-right infoTab-half">
                  <div className="verticalCenter">
                    <div id="onlinepolice">--</div>
                    <div>在线民警</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}  md={4} sm={12} xs={12}>
            <div className="infoTab" style={{background:'#E6A418'}}>
              <div className="infoTab-top-orange">
                <div className="verticalCenter">
                  <img  src='../images/pen_w.png' className="icon"/>
                  <span> 信息采集</span>
                </div>
              </div>
              <div >
                <div className="float-left infoTab-Onethird infoTab-border-orange">
                  <div className="verticalCenter">
                    <div id="infotoday">--</div>
                    <div>今日新增</div>
                  </div>
                </div>
                <div className="float-left infoTab-Onethird infoTab-border-orange">
                  <div className="verticalCenter">
                    <div id="infomounth">--</div>
                    <div>本月新增</div>
                  </div>
                </div>
                <div className="float-right infoTab-Onethird">
                  <div className="verticalCenter">
                    <div id="infototal">--</div>
                    <div>累计新增</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}  md={4} sm={12} xs={12}>
            <div className="infoTab" style={{background:'#F86C6B'}}>
              <div className="infoTab-top-pink">
                <div className="verticalCenter">
                  <img  src='../images/alert_w.png' className="icon"/>
                  <span> 违规预警</span>
                </div>
              </div>
              <div >
                <div className="float-left infoTab-Onethird infoTab-border-pink">
                  <div className="verticalCenter">
                    <div id="noticetoday">--</div>
                    <div>今日新增</div>
                  </div>
                </div>
                <div className="float-left infoTab-Onethird infoTab-border-pink">
                  <div className="verticalCenter">
                    <div id="noticemounth">--</div>
                    <div>本月新增</div>
                  </div>
                </div>
                <div className="float-right infoTab-Onethird">
                  <div className="verticalCenter">
                    <div id="noticetotal">--</div>
                    <div>累计新增</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col lg={12}  md={12} sm={12} xs={12}>
            <div className="bannerTitle">
              <span>勤务情况</span>
            </div>
          </Col>
        </Row>

        <Row bsClass="row row-background">
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge bsClass="badge badge-active">--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
          <Col lg={1}  md={2} sm={2} xs={3}>
            <div className="bannerItem">
              <p>江岸<Badge>--</Badge></p>
            </div>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col lg={12}  md={12} sm={12} xs={12}>
            <div className="bannerTitle">
              <span>信息采集</span>
            </div>
          </Col>
        </Row>

        <Row bsClass="row row-background">
          <Col lg={2}  md={2} sm={12} xs={12}>
            <div className="rk rk-big-height">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="rk">
              人口管理
            </div>
          </Col>

        </Row>




        <Row bsClass="row row-background">
          <Col lg={2}  md={2} sm={12} xs={12}>
            <div className="dz dz-big-height">
              地址管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dz">
              人口管理
            </div>
          </Col>

        </Row>



        <Row bsClass="row row-background">
          <Col lg={2}  md={2} sm={12} xs={12}>
            <div className="dw">
              单位组织
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dw">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dw">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dw">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="dw">
              人口管理
            </div>
          </Col>

        </Row>

        <Row bsClass="row row-background">
          <Col lg={2}  md={2} sm={12} xs={12}>
            <div className="ba">
              办案事件
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="ba">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="ba">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="ba">
              人口管理
            </div>
          </Col>

          <Col lg={2}  md={2} sm={6} xs={6}>
            <div className="ba">
              人口管理
            </div>
          </Col>

        </Row>

        <br/>

        <Row>
          <Col lg={12}  md={12} sm={12} xs={12}>
            <div className="bannerTitle">
              <span>待办事项</span>
            </div>
          </Col>
        </Row>

        <Row bsClass="row row-background">
          <Col lg={2}  md={4} sm={6} xs={6}>
            <div className="dbsx dbsx-border-orange ">
              <div className="verticalCenter border ">
                <div className="displayinline">
                  <img  src='../images/lxr.png' className="md-icon "/>
                </div>
                <div className="border width50 displayinline">
                  <div >--</div>
                  <div>今日新增</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2}  md={4} sm={6} xs={6}>
            <div className="dbsx dbsx-border-blue">
              <div className="verticalCenter">
                <img  src='../images/people.png' className="md-icon"/>
                <span>重点人员见面</span>
              </div>
            </div>
          </Col>
          <Col lg={2}  md={4} sm={6} xs={6}>
            <div className="dbsx dbsx-border-pink">
              <div className="verticalCenter">
                <img  src='../images/jsbr.png' className="md-icon"/>
                <span>精神患者走访</span>
              </div>
            </div>
          </Col>
          <Col lg={2}  md={4} sm={6} xs={6}>
            <div className="dbsx dbsx-border-green">
              <div className="verticalCenter">
                <img  src='../images/czfw.png' className="md-icon"/>
                <span>出租屋巡查</span>
              </div>
            </div>
          </Col>
          <Col lg={2}  md={4} sm={6} xs={6}>
            <div className="dbsx dbsx-border-lightblue">
              <div className="verticalCenter">
                <img  src='../images/police-car.png' className="md-icon"/>
                <span>警情回访</span>
              </div>
            </div>
          </Col>

        </Row>

        <br/>

        <Row>
          <Col lg={12}  md={12} sm={12} xs={12}>
            <div className="bannerTitle">
              <span>违规预警</span>
            </div>
          </Col>
        </Row>

        <Row bsClass="row row-background">
          <Col lg={12}  md={12} sm={12} xs={12}>
            {this.state.barOption!=null?(<ReactEcharts
                option={this.state.barOption}
                style={{height: '350px', width: '100%'}}
                className='react_for_echarts' />):(null)}
          </Col>
        </Row>
      </div>
    );
  }
}

GsPage.defaultProps = {
};

export default GsPage;
