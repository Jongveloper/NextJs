import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UN_FOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const me = userInfo.me;
  const followLoading = userInfo.followLoading;
  const unFollowLoading = userInfo.unFollowLoading;

  const isFollowing = me && me.Followings.find((v) => v.id === post.User.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UN_FOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) {
    return null;
  }
  return (
    <>
      <Button loading={followLoading || unFollowLoading} onClick={onClickButton}>
        {isFollowing ? '언팔로우' : '팔로우'}
      </Button>
    </>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
