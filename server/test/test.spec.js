import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

describe('Testing travis ci', () => {
  it('should return 200 on successful', async () => {
    const res = await chai.request(app)
      .get('/api/v1/');

    expect(res).to.have.status(200);
    expect(res).to.be.a('object');
  });
});
