const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
        },
        // content: {
        //   type: Sequelize.TEXT,
        // },
        // imagePath: {
        //   type: Sequelize.STRING(255),
        // },
        // filePath: {
        //   type: Sequelize.STRING(255),
        // },
      },
      {
        sequelize,
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(db) {
    db.Board.belongsTo(db.User, {
      foreignKey: { name: "userId", onDelete: "SET NULL", as: "User" },
    });
    db.Board.hasMany(db.Post, {
      foreignKey: { name: "boardId", onDelete: "SET NULL", as: "Posts" },
    });
  }

  static includeAttributes = ["id", "title", "active", "createdAt"];
};
