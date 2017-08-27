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
    const settings = {
      dots:false,
    };

    const headerBanner = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '600px',
      width: '100%',
      backgroundImage: 'url("./src/images/food-background.jpg")',
      backgroundSize: 'cover',
    };


    return(
      <header className="headerMain">
       <Row>
         <Col span={24}>
           <Carousel {...settings}>
              <div  style={headerBanner}>
                <div className="headerBannerContent">
                  <img alt=""  src="./src/images/pacific.png" />
                </div>
              </div>
           </Carousel>
           <Row>
             <Col xs={0} sm={0} md={1} lg={3} xl={4}></Col>
             <Col xs={24} sm={24} md={22} lg={18} xl={16}>
               <Tabs defaultActiveKey="1" className="tabBar">
                  <TabPane tab={<span>Burger</span>} key="1">
                    <div className="menuTitle">
                      <p>MENU</p>
                      {/* <img className="productImg" src="./src/images/menu.png" alt="Product"/> */}
                    </div>
                    <div className="cardBox">
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                      <div className="cardContent">
                        <div className="cardImgBlock">
                          <img className="productImg" src="./src/images/default.png" alt="Product"/>
                        </div>
                        <div className="cardContentBlock">
                          <h2 className="cardContentTitle">Plain Burger</h2>
                          <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                            Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPane>


                  <TabPane tab={<span>Snack</span>} key="2">
                  <div className="menuTitle">
                    <p>MENU</p>
                    {/* <img className="productImg" src="./src/images/menu.png" alt="Product"/> */}
                  </div>
                  <div className="cardBox">
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>

                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                    <div className="cardContent">
                      <div className="cardImgBlock">
                        <img className="productImg" src="./src/images/default.png" alt="Product"/>
                      </div>
                      <div className="cardContentBlock">
                        <h2 className="cardContentTitle">Plain Burger</h2>
                        <p className="cardContentText">Beef pattie, Lettuce, Sauce, Lettuce,
                          Sauce, Lettuce, Sauce, Lettuce, Sauce, Lettuce, Sauce
                        </p>
                      </div>
                    </div>
                  </div>
                  </TabPane>
                </Tabs>
             </Col>
             <Col xs={0} sm={0} md={1} lg={3} xl={4}></Col>
           </Row>
         </Col>
       </Row>
     </header>
    );
  };
}
