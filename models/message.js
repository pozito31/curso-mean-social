'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
    text: String,
    viewed: String,
    create_at: String,
    emiter: { type: Schema.ObjetId, ref: 'User' },
    receiver: { type: Schema.ObjetId, ref: 'User' }
});

module.exports = mongoose.model('Message', MessageSchema);