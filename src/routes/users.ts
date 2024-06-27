import {Router} from 'express'
import { getUsers, getUsersByID, createUser } from '../handlers/users'

const router = Router()

// /api/users
router.get('/', getUsers)

// /api/users/123
router.get('/:id', getUsersByID)

// /api/users
router.post('/', createUser)

export default router