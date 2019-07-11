import React from "react";
import { Carousel, Card, Rate, Row, Col } from "antd";

class VenueDetails extends React.Component {
  render() {
    return (
      <div>
        <Card bordered={false}>
          <Carousel autoplay>
            <div>
              <h3>Venue Image 1</h3>
            </div>
            <div>
              <h3>Venue Image 2</h3>
            </div>
            <div>
              <h3>Venue Image 3</h3>
            </div>
            <div>
              <h3>Venue Image 4</h3>
            </div>
          </Carousel>
        </Card>

        <Card bordered={false}>
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              Name:
            </Col>
            <Col xs={{ span: 18 }} lg={{ span: 8 }}>
              ABCDEF
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              Ameneties:
            </Col>
            <Col xs={{ span: 18 }} lg={{ span: 8 }}>
              WiFi, Parking
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              Address:
            </Col>
            <Col xs={{ span: 18 }} lg={{ span: 8 }}>
              asdfg,yghjhbh
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              Ratings:
            </Col>
            <Col xs={{ span: 18 }} lg={{ span: 8 }}>
              <Rate disabled defaultValue={2} />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              Description:
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 21 }}>
              qwertyuiopasdfghjklzxcvbnm
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
export default VenueDetails;
