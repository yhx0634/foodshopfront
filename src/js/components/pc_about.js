import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Card } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

export default class PCAbout extends React.Component{

  render(){


    return(
      <div className="aboutContent">
       <Row>
         <div className="aboutBlock">
           <Col xs={0} sm={0} md={1} lg={3} xl={4}></Col>
            <Col xs={24} sm={24} md={22} lg={18} xl={16}>
              <div className="aboutTitle">
                <p>ABOUT</p>
                {/* <img className="productImg" src="./src/images/menu.png" alt="Product"/> */}
              </div>
              <div className="cardBox">
                <div className="aboutDes">
                  <p>
                    Pacific fish&chips since 200x, xxxx xxx xx xxxx xxx
                    dsda sadas das. sadas. sadasd asdas aad. sadasdasd asd
                    das das asdas asdas asdsadas asdsa asd. asdas. dasd. ads
                    adsa
                    adasd asdas adas de32d 23dsfw 23ds3 sds34 sdds4 dff
                    dfsdf ssdf4f f43f 3dghkm klfsd3 sdssd kkd 32ds. w sd;sd dfdsfsksdf
                    dfsdk sdls
                    ddfskk wlkfwe j fdsf sdsott. fdsfn scpw ljwfwe fpjef
                    dfsfef

                    sfdsfdlknl
                    dsf
                    knnklnf
                    2017
                  </p>
                </div>

              </div>
            </Col>
            <Col xs={0} sm={0} md={1} lg={3} xl={4}></Col>
         </div>
       </Row>
     </div>
    );
  };
}
