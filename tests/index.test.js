/*
 * File: index.test.js
 * Desc: test case
 * File Created: 2019-10-29 15:00:02
 * Author: chenghao
 * ------
 * Copyright 2019 - present, chenghao
 */
const { Linter } = require('eslint');
require('../index');

describe('eslint-plugin-errorall', () => {
    const config = {
        rules: {
            eqeqeq: 1
        }
    }
    const sourceCode = `var a = 1;a == 1`;
    it('overwrite warn to error', () => {
        const linter = new Linter();
        const messages = linter.verify(sourceCode, config);
        expect(messages[0].severity).toBe(2);
    })
})