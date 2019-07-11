import React from "react";
import { Table, DatePicker, Button, Row, Col } from "antd";
import VenueDetails from "./VenueDetails";
import NearestVenues from "./NearestVenues";
const columns = [
  {
    title: "Time Slot",
    dataIndex: "name"
  },
  {
    title: "Price",
    dataIndex: "age"
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
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

class BookSlots extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    selectNumberOfSeats: "1"
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
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
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
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
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Row>
          <Col lg={{ span: 15 }}>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </Col>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 6 }}>
            <NearestVenues />
          </Col>
        </Row>
        <Button>Book Tickets and Pay</Button>
      </div>
    );
  }
}

export default BookSlots;
