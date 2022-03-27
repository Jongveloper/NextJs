import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  const followerList = [{ nickname: '초롱초롱무지' }, { nickname: '상어악어가죽' }, { nickname: '펩시제로슈가' }];
  const followingList = [{ nickname: '초롱초롱무지' }, { nickname: '상어악어가죽' }, { nickname: '펩시제로슈가' }];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
