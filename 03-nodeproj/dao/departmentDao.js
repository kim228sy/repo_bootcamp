const { Op } = require("sequelize");
const { Department } = require("../models/index");

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Department.create(params)
        .then((inserted) => {
          resolve(inserted);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    // if (params.id) {
    //   setQuery.where = {
    //     ...setQuery.where = {
    //       id: params.id, // in 검색 id 값이 Array만 in검색, 나머지는 = 검색
    //       // id: { [Op.in]: params.id }, // in 검색
    //     },
    //   };
    // }
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: params.id, // '=' 검색
        // id: { [Op.in]: params.id }, // in 검색
        // id: { [Op.gt]: params.id }, // '>' 검색
        // id: { [Op.lte]: params.id }, // '<=' 검색
      };
    }
    if (params.name) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` }, // like검색
      };
    }
    setQuery.order = [["id", "DESC"]];
    return new Promise((resolve, reject) => {
      // Department.findAll
      Department.findAndCountAll({
        ...setQuery,
        // attributes: ['id', 'name', 'code'],
        attributes: { exclude: ["description"] },
      })
        .then((selectedList) => {
          resolve(selectedList);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      // Department.findAll
      Department.findByPk(params.id)
        .then((selectedInfo) => {
          resolve(selectedInfo);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      // Department.findAll
      Department.update(params, {
        where: { id: params.id },
      })
        .then(([updated]) => {
          resolve({ updatedCount: updated });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      // Department.findAll
      Department.destroy({
        where: { id: params.id },
      })
        .then((deleted) => {
          resolve({ deletedCount: deleted });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

module.exports = dao;
