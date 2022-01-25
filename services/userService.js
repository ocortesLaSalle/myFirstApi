const mongoose = require('mongoose');
const User = require('../models/db/userModel');
const repository = require('../database/repository');

module.exports.selectById = async (userId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(userId),
      model: User,
      projection: {
        
      }
    };
    const resFromRepo = await repository.selectById(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const data = {
      findQuery: queryParams,
      model: User,
      projection: {
        
      }
    };
    if (pagination.skip && pagination.limit) {
      data.skip = pagination.skip;
      data.limit = pagination.limit;
    }
    const resFromRepo = await repository.selectAll(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (userFromController) => {
  const response = { status: false };
  try {
    const user = new User(userFromController);
    const resFromRepo = await repository.create(user);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-create: ', err);
  }
  return response;
}

module.exports.update = async (user) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(user.id),
      model: User,
      projection: {
        
      },
      updateQuery: {}
    };
    if (user.mail) data.updateQuery.mail = user.mail;
    if (typeof user.active != 'undefined') data.updateQuery.active = user.active;
    const resFromRepo = await repository.update(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-update: ', err);
  }
  return response;
}
module.exports.delete = async (userId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(userId),
      model: User,
      projection: {
      }
    };
    const resFromRepo = await repository.delete(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-delete: ', err);
  }
  return response;
}