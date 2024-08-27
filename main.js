#!/usr/bin/env node
const { mod1Function, modFunction2 } = require('./mod1.js');

const testfunction = () => {
  console.log('I am the main function');
  mod1Function();
  modFunction2();
};

testfunction();

