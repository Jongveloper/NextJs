import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
  return (
    <List
      loadMore={<div style={{ textAlign: 'center', margin: '10px 0' }}><Button>더 보기</Button></div>}
      size='small'
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
      header={<div>{header}</div>} />

  )
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default FollowList;