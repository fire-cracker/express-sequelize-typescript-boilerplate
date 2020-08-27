import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

import app from '../app'
import { userDetails } from './mocks/users.mock'

chai.use(chaiHttp)

describe('Tests for create users', () => {
  it('should create user if request is correct', async () => {
    const res = await chai.request(app).get('/users')
    expect(res).to.have.status(200)
    expect(res.body)
    expect(res.body)
      .to.be.an.instanceof(Object)
      .and.to.have.property('data')
      .that.includes.all.keys('users', 'count')
      .and.to.have.property('users')
      .and.to.be.an.instanceof(Array)
      .and.to.have.length.greaterThan(0)
    // .that.includes.all.keys(userDetails)
  })
})
