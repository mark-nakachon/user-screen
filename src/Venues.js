import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import Foter from './Components/Foter';
import Venue from './Components/Venue';
import { Row,Col,Button,DatePicker,Select,Card,Slider,InputNumber,Rate,Checkbox,Input } from 'antd';

const {Option} = Select;


class VenueDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            minPrice:0,
            maxPrice:0,
            rating:3

        };
        this.minpriceChange = this.minpriceChange.bind(this);
        this.maxpriceChange = this.maxpriceChange.bind(this);
        this.rateChange = this.rateChange.bind(this);
        this.checked = this.checked.bind(this);
    }

    dateChanged(date,dateString){
        console.log(date,dateString);
    }
    locationChanged(value){
        console.log(`selected ${value}`);
    }
    minpriceChange(value){
        console.log(value);
        this.setState({
            minPrice:value
        })
    }
    maxpriceChange(value){
        this.setState({
            maxPrice:value
        })
    }
    rateChange(value){
        this.setState({
            rating:value
        })
    }
    checked(e){
        console.log(e.target.checked);
    }
    render() {
        const {minPrice,maxPrice,rating} = this.state;
        const desc = [];
        return (
        <React.Fragment>
            <Navbar/>
            <section id="selection" style={{marginTop:200,marginBottom:50}}>
            <Row type="flex" justify="space-around" align="middle">
            <Col span={4}>
                <Select defaultValue="Choose Event Type" style={{width:200}} onChange={this.eventChanged}>
                    <Option value="Open Mike">Open Mike</Option>
                    <Option value="Comedy show">Comdey show</Option>
                </Select>
            </Col>
            <Col span={4}>
                <Select defaultValue="Choose location" style={{width:200}} onChange={this.locationChanged}>
                    <Option value="Delhi">Delhi</Option>
                    <Option value="Mumbai">Mumbai</Option>
                </Select>
            </Col>
            <Col span={4}>
                <DatePicker onChange={this.dateChanged}/>
            </Col>
            <Col span={4}>
                <Button type="primary">Search</Button>
            </Col>
            </Row>
            </section>
            <section id="events">
                <Row type="flex" justify="center" align="top" gutter={100}>
                    <Col span={6}>
                    <Card  bordered={true}>
                        <h1>Filter by category</h1>
                         <Row>
                            Enter minimum price range
                            <Col span={12}>
                            <Slider
                                min={500}
                                max={1000}
                                onChange={this.minpriceChange}
                                value={typeof minPrice === 'number' ? minPrice : 0}
                            />
                            </Col>
                            <Col span={4}>
                            <InputNumber
                                min={500}
                                max={1000}
                                value={minPrice}
                                onChange={this.minpriceChange}
                            />
                            </Col>
                        </Row>
                         <Row>
                            Enter maximum price range
                            <Col span={12}>
                            <Slider
                                min={500}
                                max={1000}
                                onChange={this.maxpriceChange}
                                value={typeof maxPrice === 'number' ? maxPrice : 0}
                            />
                            </Col>
                            <Col span={4}>
                            <InputNumber
                                min={500}
                                max={1000}
                                value={maxPrice}
                                onChange={this.maxpriceChange}
                            />
                            </Col>
                        </Row>
                         <span>
                             Rating
                            <Rate tooltips={desc} onChange={this.rateChange} value={rating} />
                            {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
                        </span>
                        <div style={{marginTop:'15px'}}>
                        <Checkbox onChange={this.checked}>Sort by distance </Checkbox>
                        </div>
                        <div style={{marginTop:'15px'}}>
                            <Input placeholder="Search By place" />
                        </div>
                    </Card>
                    </Col>

                    <Col span={14}>
                        <Venue/>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
         );
    }
}

export default VenueDetails;

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
