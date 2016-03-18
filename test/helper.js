import 'babel-polyfill'
import chai from 'chai'
import sinon from 'sinon'

chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))

global.expect = chai.expect
global.sinon = sinon

process.on('unhandledRejection', (err) => { throw err })
