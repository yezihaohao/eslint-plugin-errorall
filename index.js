/*
 * File: index.js
 * Desc: overwrite eslint warn to error level
 * File Created: 2019-10-29 14:52:34
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
const eslint = require('eslint');
const verify = eslint.Linter.prototype.verify;

eslint.Linter.prototype.verify = function () {
    const messages = verify.apply(this, arguments);
    messages.forEach(message => {
        if (message.severity === 1) {
            message.severity = 2;
        }
    });
    return messages;
}
