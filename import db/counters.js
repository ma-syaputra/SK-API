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

 Date: 20/04/2019 20:31:48
*/


// ----------------------------
// Collection structure for counters
// ----------------------------
db.getCollection("counters").drop();
db.createCollection("counters");

// ----------------------------
// Documents of counters
// ----------------------------
db.getCollection("counters").insert([ {
    _id: "productid",
    "sequence_value": 0,
    seq: NumberInt("53")
} ]);
