import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { Input, Menu, Row, Col } from 'antd';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import useInput from '../hooks/useInput';
import Router from 'next/router';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row{
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child{
    padding-left: 0 !important;
  }

  .ant-col:last-child{
    padding-right: 0 !important;
  }

`;
const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput('');

  // const { me } = useSelector((state) => state.user);
  const me = useSelector((state) => state.user.me);
  // const {isLoggedIn} = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="menu1">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="button">
          <SearchInput enterButton value={searchInput} onChange={onChangeSearchInput} onSearch={onSearch} />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={6}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://destory.tistory.com/" target="_blank" rel="noreferrer noopener">
            woody
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
