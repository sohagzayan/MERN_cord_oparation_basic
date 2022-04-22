const express = require("express");
const mongoose = require("mongoose");


const connectionDB = async () => {
  try {
    const con = mongoose.connect(
      "mongodb+srv://sohag260:sohag260@cluster0.tovcs.mongodb.net/MyUser?retryWrites=true&w=majority"
    );
    console.log("db connection successful");
  } catch (err) {
      console.log(err.message);
  }
};

module.exports = connectionDB
