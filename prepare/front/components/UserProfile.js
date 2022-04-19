import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import Link from 'next/link';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const me = userState.me;
  const logoutLoading = userState.logoutLoading;
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          <Link href={`/user/${me.id}`}>
            <a>
              쨱짹
              <br />
            </a>
          </Link>
          {me.Posts.length}
        </div>,
        <div key="followings">
          <Link href="profile">
            <a>
              팔로잉
              <br />
            </a>
          </Link>
          {me.Followings.length}
        </div>,
        <div key="followers">
          <Link href="profile">
            <a>
              팔로워
              <br />
            </a>
          </Link>
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Link href={`/user/${me.id}`}>
            <a>
              {' '}
              <Avatar>{me.nickname[0]}</Avatar>{' '}
            </a>
          </Link>
        }
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logoutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};
export default UserProfile;
