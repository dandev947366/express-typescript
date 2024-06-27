import express, {Request, Response, NextFunction} from 'express'
import {CreateUserDto} from "../dtos/CreateUser.dto"
import {CreateUserQueryParams} from "../types/query-params"
export function getUsers(request: Request, response: Response){
    response.send([])

}

export function getUsersByID(request: Request, response: Response){
    response.send({})

}

export function createUser(request: Request<{
    id: string;
},{},CreateUserDto, CreateUserQueryParams>, response: Response){
    
    request.body.username
}