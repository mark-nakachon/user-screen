import React, { Component } from 'react';
import {Card,Row,Col,Rate,Button} from 'antd';
class Venue extends Component {
    render() {
        return (
            <div>
                <Card bordered={true}>
                    <Row type="flex" justify="center" align="top" gutter={6}>
                        <Col span={8}>
                            <div>Image of the venue</div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <h3>Name</h3>
                                <p>Description</p>
                                <Rate disabled defaultValue={3}/>
                            </div>
                        </Col>
                        <Col span={8}>
                            <p>Price</p>
                            <p>Amenties</p>
                            <Button type="primary">View Details</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Venue;