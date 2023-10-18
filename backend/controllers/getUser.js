const express = require('express');
const router = require('express').router;
const User = require('../models/user.model');

const getUser = (req,res) => {
    User.find()
        .then(() => res.status(200).json({'User': User}))
        .catch(err => res.status(400).json('Error' + err))
}

const addUser = (req,res) => {
    const username = req.body.username;
    const newUser  = new User({username});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error:' + err));
}

module.exports = {
    getUser,
    addUser,
}