import request from 'supertest'
import { createApp } from '../createApp'
import {type Express} from 'express'
describe('api/users', ()=>{
    let app: Express = createApp()
    beforeAll(()=>{
        app = createApp()
    })
})