import React from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Card } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

export default class PCFooter extends React.Component{

  render(){


    return(
      <div className="footerContent">
       <Row>
         <div className="footerBlock">
            <div className="footerInfo">
              <div>215 Beach Street</div>
              <div>Frankstone</div>
              <div>VIC 3199</div>
              <hr/>
              <div>(03) 9789 9793</div>
            </div>
            <div className="footerRight">
              <p>&copy;&nbsp;2017 Pacific fish&chips. All Rights Reserved.</p>
            </div>
         </div>
       </Row>
     </div>
    );
  };
}
