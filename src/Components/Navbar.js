import React, { Component } from 'react';
import { Layout, Menu,Row,Col,Icon } from 'antd';
const { Header} = Layout;
class Navbar extends Component {
    state = {  }
    render() {
        return (
            <Layout className="layout">
                <Header>
                  <Row justify="start" type="flex" align="middle">
                  <Col span={12} ><h3 style={{color:'white'}}>Pioneering Web Solutions</h3></Col>
                    <div style={{marginLeft:'auto'}}>
                    <Row style={{color:'white'}} gutter={25}>
                      <Col span={8}>
                        <h4 style={{color:'white'}}>
                          Notifications
                        </h4>
                      </Col>
                      <Col span={8}>
                        <h4 style={{color:'white'}}>Gifts/Offers</h4>
                      </Col>
                      <Col span={8}>
                        <h4 style={{color:'white'}}>Login</h4>
                      </Col>
                    </Row>
                    </div>
                  </Row>
                </Header>
          </Layout>
        )
}
}

export default Navbar;
