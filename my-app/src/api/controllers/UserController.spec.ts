import { UserController } from "./UserController";
import { UserService } from '../services/UserService';
import { Request } from 'express';
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

describe('UserController', () => {
    const mockUserService: jest.Mocked<Partial<UserService>> = {
        createUser: jest.fn()
    };
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com'
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' });
    });

    it('Retornar todos os usuários do banco de dados', () => {
        // Mock data
        const mockUsers = [
            { id: 1, name: 'User 1', email: 'user1@test.com' },
            { id: 2, name: 'User 2', email: 'user2@test.com' }
        ];
        
        mockUserService.getAllUsers = jest.fn().mockReturnValue(mockUsers);
        
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();

        userController.getAllUsers(mockRequest, mockResponse);

        expect(mockUserService.getAllUsers).toHaveBeenCalled();
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toEqual(mockUsers);
    });
});