'use strict'
const TestRunner = require('test-runner')
const ArrayBase = require('./')
const a = require('assert')

const runner = new TestRunner()

runner.test('main', function () {
  class Arr extends ArrayBase {}

  const arr = new Arr()
  a.strictEqual(arr.length, 0)
  arr.load([ 1,2,3 ])
  a.strictEqual(arr.length, 3)
  a.deepEqual(arr, [ 1,2,3 ])
  arr.clear()
  a.deepEqual(arr, [])
})
