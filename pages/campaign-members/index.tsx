import React from "react";
import { Row, Col, Card, Grid } from "antd";
import CallInput from "./call-input/CallInput";
import Members from "./members/Member";
import Header from "./header/Header";

const View = () => {
  return (
    <Row align="middle" justify="center" style={{backgroundColor:'#ccc'}}>
      <Col span={24} style={{ padding: "5px 20px" ,backgroundColor:'#E6E7E8'}}>
        <Header />
      </Col>
      <Row style={{padding:'30px',width:'100%'}}>
        <Col span={24} style={{margin:'20px 0' ,backgroundColor:'#ccc'}}>
          <Members />
        </Col>
        <Col span={24} style={{margin:'20px 0'}} >
          <CallInput />
        </Col>
      </Row>
    </Row>
  );
};

export default View;
