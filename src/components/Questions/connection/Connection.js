import React from "react";
import "./Connection.css";
import { Input, Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";

const Connection = ({ setQNumber, establishment, setEstablishment }) => {
  const history = useHistory();

  return (
    <Row className="connection_page container">
      <div className="heading">
        <h1>Question 4: Connections</h1>
      </div>
      <Col xs={2} sm={4} md={6} lg={8} xl={12} className="connection_container">
        <div className="conn_title">
          <h1>Please select who will be joining you</h1>
        </div>
        <div className="total_pax">
          <h3>Total Pax</h3>
          <Input
            className="input_num"
            type="number"
            onChange={(e) =>
              setEstablishment({ ...establishment, totalPax: e.target.value })
            }
            defaultValue={1}
            min={1}
            max={8}
          />
        </div>
        <div className="conn_btn">
          <Button
            className="conn_pri"
            onClick={() => setQNumber(3)}
            type="primary"
            size="large"
          >
            BACK
          </Button>
          <Button
            className="conn_pri"
            onClick={() =>
              history.push(
                `/result/?totalPax=${establishment.totalPax}&occasion=${establishment.occasion}&time=${establishment.time}&price=${establishment.price}`
              )
            }
            type="primary"
            size="large"
          >
            Next
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Connection;
