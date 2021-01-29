import React from "react";
import { DatePicker, Select, Card, Input, Form, Row, Col, Button } from "antd";
const { Option } = Select;
const { TextArea } = Input;
import "antd/dist/antd.css";
const CallInput = () => {
  return (
    <Card title="Card title" bordered={false} style={{ width: "100%" }}>
      <Form labelCol={{ xs: 24, sm: 24, md: 24, lg: 9, xl: 7, xxl: 6 }}>
        <Row style={{ marginBottom: 0 }}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item name="Call Date Time" label="Call Date Time">
              <DatePicker
                renderExtraFooter={() => "extra footer"}
                showTime
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item name="Attend to Arrive" label="Attend to Arrive">
              <Select defaultValue="Yes" style={{ width: "100%" }}>
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              name="Campaign recruting status"
              label="Campaign recruting status"
            >
              <Select defaultValue="Yes" style={{ width: "100%" }}>
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item name="Call Summary" label="Call Summary">
              <TextArea rows={3} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row align='middle'justify='center' style={{width:"100%",position:'relative'}}>
          <Col span={24}
           style={{
             display:'flex',
             position:'absolute',
             left:'50%',
             transform:'translateX(-50%)'
             
           }}
          >
            <Button type="primary">Submit</Button>
            <Button type="primary" danger style={{ marginLeft: "4%" }}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
export default CallInput;
