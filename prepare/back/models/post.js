// MySQL에서는 posts로 저장됨
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4', // 이모티콘까지
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments , post.getComments
    db.Post.hasMany(db.Image); // post.addImages (Many가 붙어 복수) , post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }); // post.addLikers , post.removeLikers (Many가 붙어 복수)
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
  };
  return Post;
};
