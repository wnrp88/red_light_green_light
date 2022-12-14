import React from 'react';
import { HeaderInterface } from '../../interfaces';
import { Col, Row, Layout, Typography } from 'antd';
import Logout from '../logout/Logout';

const { Header: HeaderAntd } = Layout;
const { Title } = Typography;

const Header = (props: HeaderInterface) => {
  const { text } = props;

  return (
    <HeaderAntd className="header">
      <Row align="middle">
        <Col flex="auto">
          <Title
            level={4}
            className="title mb-0"
          >
            {text}
          </Title>
        </Col>

        <Col flex="none">
          <Logout/>
        </Col>
      </Row>
    </HeaderAntd>
  );
};

export default Header;
