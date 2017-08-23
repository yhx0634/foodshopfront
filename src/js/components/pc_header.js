import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component{
  render(){
    return(
      <header>
       <Row>
         <Col span={2}></Col>
         <Col span={20}>
            <Carousel>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
         </Col>
         <Col span={2}></Col>
       </Row>
     </header>
    );
  };
}
