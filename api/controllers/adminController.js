import adminModel from '../models/adminModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signup = (req, res, next) => {
    //--------------
    //password crypté sous forme de hash grâce au package de cryptage bcrypt
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const admin = new adminModel({
                email: req.body.email,
                password: hash
            });
            admin.save()
                .then(() => res.status(201).json({ message: 'Admin created !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};


export const login = (req, res, next) => {
    console.log(req.body.email)
    adminModel.findOne({ email: req.body.email })
        .then(admin => {
            console.log(admin)
            if (!admin) {
                return res.status(401).json({ error: 'Admin not found !' });
            }
            bcrypt.compare(req.body.password, admin.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong password !' });
                    }
                    res.status(200).json({
                        adminId: admin._id,
                        token: jwt.sign(
                            { adminId: admin._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};