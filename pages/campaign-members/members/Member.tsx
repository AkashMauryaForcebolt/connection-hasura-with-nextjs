import React from "react";
import styles from "./Member.module.css";
import { Card, Form, Row, Col, Button, Input, Grid } from "antd";

const Members = () => {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();

  return (
    <Card title="Your next call is to " bordered={false} style={{ width: "100%" }}>
      <Form labelCol={{xs:24, sm:24, md:7 ,lg:6 ,xl:5}}>
          
        <Row style={{ marginBottom: 0 }}>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item name="FirstName"
            label="FirstName"
            >
                <label className={styles.Label}>Akash</label>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item name="LastName"
            label="LastName"
            > 
              <label className={styles.Label}>Maurya</label>

            </Form.Item>
          </Col>
        </Row>

        <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item name="Mobile Number"
            label="Mobile Number"
            >
              <label className={styles.Label}>987654321</label>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item name="Email"
            label="Email"
            >
             <label className={styles.Label} >akashmaurya@forcebolt.com</label>
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Card>
  );
};

export default Members;
