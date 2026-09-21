import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Historical portfolio backend routes (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET / preserves the generated root response', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GET /projects exposes the generated projects collection placeholder', () => {
    return request(app.getHttpServer())
      .get('/projects')
      .expect(200)
      .expect('This action returns all projects');
  });

  it('GET /projects/:id exposes the generated project placeholder', () => {
    return request(app.getHttpServer())
      .get('/projects/42')
      .expect(200)
      .expect('This action returns a #42 project');
  });

  it('POST /projects preserves the generated create placeholder', () => {
    return request(app.getHttpServer())
      .post('/projects')
      .send({})
      .expect(201)
      .expect('This action adds a new project');
  });

  it('PATCH /projects/:id preserves the generated update placeholder', () => {
    return request(app.getHttpServer())
      .patch('/projects/42')
      .send({})
      .expect(200)
      .expect('This action updates a #42 project');
  });

  it('DELETE /projects/:id preserves the generated remove placeholder', () => {
    return request(app.getHttpServer())
      .delete('/projects/42')
      .expect(200)
      .expect('This action removes a #42 project');
  });

  it('GET /user exposes the generated user collection placeholder', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect('This action returns all user');
  });

  it('GET /user/:id exposes the generated user placeholder', () => {
    return request(app.getHttpServer())
      .get('/user/42')
      .expect(200)
      .expect('This action returns a #42 user');
  });

  it('POST /user preserves the generated create placeholder', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({})
      .expect(201)
      .expect('This action adds a new user');
  });

  it('PATCH /user/:id preserves the generated update placeholder', () => {
    return request(app.getHttpServer())
      .patch('/user/42')
      .send({})
      .expect(200)
      .expect('This action updates a #42 user');
  });

  it('DELETE /user/:id preserves the generated remove placeholder', () => {
    return request(app.getHttpServer())
      .delete('/user/42')
      .expect(200)
      .expect('This action removes a #42 user');
  });
});
