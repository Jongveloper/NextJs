export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '우디',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://cdn.pixabay.com/photo/2022/02/12/21/02/heather-7009925_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/12/26/17/34/flowers-6895608_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/12/13/15/14/flowers-6868494_1280.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'woody',
          },
          content: '우와우!',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'jong',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
