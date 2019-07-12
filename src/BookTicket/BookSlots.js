import React from "react";
import { Table, DatePicker, Button, Row, Col, Card } from "antd";
import VenueDetails from "./VenueDetails";
import NearestVenues from "./NearestVenues";

const availability = ["Booked", "Normal", "NA", "Selected"];
const columns = [
  {
    title: "Time Slot",
    dataIndex: "name"
  },
  {
    title: "Price",
    dataIndex: "price"
  },
  {
    title: " Seats Filled",
    dataIndex: "address"
  },
  {
    title: " Status",
    dataIndex: "status"
  }
];

const data = [];
for (let i = 0; i < 24; i++) {
  data.push({
    key: i,
    name: `${i} - ${i + 1}`,
    price: Math.floor(Math.random() * 500 + 100),
    address: `${i}/${i + 10}`,
    status: availability[Math.floor(Math.random() * 4)]
  });
}

class BookSlots extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column,
    selectedRows: [],
    selectNumberOfSeats: 1,
    selectedData: [],
    price: 0
  };

  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys, selectedRows);
    this.setState({
      selectedRowKeys,
      selectedData: selectedRows
    });
  };
  getPrice = record => {
    this.setState({
      price: record.price
    });
  };
  decrement = () => {
    if (this.state.selectNumberOfSeats > 0)
      this.setState({
        selectNumberOfSeats: this.state.selectNumberOfSeats - 1
      });
  };
  increment = () => {
    this.setState({ selectNumberOfSeats: this.state.selectNumberOfSeats + 1 });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      getCheckboxProps: record => ({
        disabled: record.status === "NA" // Column configuration not to be checked
      })
    };
    const rowSelection1 = {
      type: "radio",
      onSelect: this.getPrice
    };

    return (
      <div>
        <Row>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <VenueDetails />
            <span className="note">
              <b>Note : </b>You Can Select Multiple Seats{" "}
            </span>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={this.decrement}>
              {/* <Icon type="minus-square" /> */} -
            </Button>
            &nbsp;&nbsp;
            {this.state.selectNumberOfSeats} &nbsp;&nbsp;
            <Button onClick={this.increment}>
              {/* <Icon type="plus-square" /> */} +
            </Button>
            <br />
            <DatePicker size="large" />
            <Row>
              <Col lg={{ span: 10 }}>
                <Table
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </Col>
              <Col lg={{ span: 1 }} />
              <Col lg={{ span: 8 }}>
                <NearestVenues />
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={{ span: 10 }}>
                <Table
                  rowSelection={rowSelection1}
                  columns={columns}
                  dataSource={this.state.selectedData}
                  pagination={false}
                />
              </Col>

              <Col lg={{ span: 1 }} />
              <Col lg={{ span: 3 }}>
                <Card> Select 1 slot of all the slots </Card>
              </Col>
              <Col lg={{ span: 1 }} />
              <Col lg={{ span: 3 }}>
                <Card>
                  When minimum criteria reaches, your slot will get finalised
                </Card>
              </Col>
            </Row>
            <span className="note">
              Total Price: {this.state.selectNumberOfSeats * this.state.price}
            </span>
            <br />
            <Row>
              <Col lg={{ offset: 6 }}>
                <Button style={{ textAlign: "center" }}>
                  Book Tickets and Pay
                </Button>
              </Col>
            </Row>
          </Col>

          <Col lg={{ span: 2 }} />
        </Row>
      </div>
    );
  }
}

export default BookSlots;
