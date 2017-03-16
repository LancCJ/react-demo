/**
 * Created by LancCJ on 2017/3/16.
 */
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


/**
 * BannerView  各种不同布局的banner视图
 * */
class BannerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerType:'one-two'  //default
    }
  }
  componentWillMount(){

  }

  componentDidMount(){

  }



  render() {
    return (
      <div>
        {this.state.bannerType==='one-two'?(
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
          ):
        this.state.bannerType==='one-three'?(
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
          ):(null)
        }
      </div>
    );
  }
}

BannerView.defaultProps = {
};

export default BannerView;
