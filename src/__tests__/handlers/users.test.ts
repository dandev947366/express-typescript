 import {getUsers} from '../../handlers/users'
 import {mockRequest, mockResponse} from '../../__mocks__/index'
 describe('getUsers',()=>{
    it('should return an array of users', ()=>{
        getUsers(mockRequest, mockResponse)      
        expect(mockResponse.send).toHaveBeenCalledWith([])
    })
 })