import React,{Component} from 'react';
import Navbar from './Components/Navbar';
import Foter from './Components/Foter';
import Venue from './Components/Venue';
import { Row,Col,Button,DatePicker,Select,Card } from 'antd';

const {Option} = Select;


class VenueDetails extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    dateChanged(date,dateString){
        console.log(date,dateString);
    }
    locationChanged(value){
        console.log(`selected ${value}`);
    }
    render() {
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
                    <Card title ="Filter Venues by Categories" style={{backgroundColor:'white'}} bordered={true}>

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