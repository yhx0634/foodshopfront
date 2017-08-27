import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Card } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

export default class PCNews extends React.Component{

  render(){


    return(
      <div className="newsContent">
       <Row>
         <div className="newsBlock">
           <Col xs={0} sm={0} md={1} lg={3} xl={4}></Col>
            <Col xs={24} sm={24} md={22} lg={18} xl={16}>
              <div className="newsTitle">
                <p>NEWS</p>
                {/* <img className="productImg" src="./src/images/menu.png" alt="Product"/> */}
              </div>
              <div className="newsCardBox">
                <div className="newsCardContent">
                  <div className="newsImgBlock">
                    <img className="newsImg" src="./src/images/default.png" alt="Product"/>
                  </div>
                  <div className="newsCardContentBlock">
                    <h2 className="newsCardContentTitle">Christmas 2017 sales</h2>
                    <p className="newsCardContentText">10 - 10 - 2017</p>
                  </div>
                </div>

                <div className="newsCardContent">
                  <div className="newsImgBlock">
                    <img className="newsImg" src="./src/images/default.png" alt="Product"/>
                  </div>
                  <div className="newsCardContentBlock">
                    <h2 className="newsCardContentTitle">Christmas 2017 sales fdgdf fdgd dfg d dfgdf df dfdf dfg fdg dfg </h2>
                    <p className="newsCardContentText">10 - 10 - 2017</p>
                  </div>
                </div>
              </div>
              <div className="btnViewMoreNews">
                View More News
              </div>


            </Col>
            <Col xs={0} sm={0} md={1} lg={3} xl={4}></Col>
         </div>
       </Row>
     </div>
    );
  };
}
