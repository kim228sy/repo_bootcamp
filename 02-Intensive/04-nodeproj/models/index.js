const { sequelize } = require('./connection');
const Department = require('./department');
const User = require('./user');
const Board = require('./board');
const Post = require('./post');
const Comment = require('./comment');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Department = Department;
db.User = User;
db.Board = Board;
db.Post = Post;
db.Comment = Comment;

// model init
// Department.init(sequelize);
// User.init(sequelize);
// Board.init(sequelize);
// Post.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].init) {
    db[modelName].init(sequelize);
  }
});
// association(관계 생성)
// Department.associate(db);
// User.associate(db);

// 관계설정 자동 코드
// ['Department', 'User','..']
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
