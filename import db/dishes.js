/*
 Navicat Premium Data Transfer

 Source Server         : Mongo Local
 Source Server Type    : MongoDB
 Source Server Version : 40003
 Source Host           : localhost:27017
 Source Schema         : m_dishes

 Target Server Type    : MongoDB
 Target Server Version : 40003
 File Encoding         : 65001

 Date: 20/04/2019 20:32:00
*/


// ----------------------------
// Collection structure for dishes
// ----------------------------
db.getCollection("dishes").drop();
db.createCollection("dishes");

// ----------------------------
// Documents of dishes
// ----------------------------
db.getCollection("dishes").insert([ {
    _id: ObjectId("5cbb1d8b60b091acf4149dfb"),
    dishesId: NumberInt("49"),
    dishesName: "dishes 1",
    createdDate: ISODate("2019-04-20T13:24:26.09Z"),
    isActive: NumberInt("1")
} ]);
db.getCollection("dishes").insert([ {
    _id: ObjectId("5cbb1da660b091acf4149dfd"),
    dishesId: NumberInt("51"),
    dishesName: "dishes 3",
    createdDate: ISODate("2019-04-20T13:24:53.17Z"),
    isActive: NumberInt("1")
} ]);
