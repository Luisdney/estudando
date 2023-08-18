import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";


export const userEntityMock: UserEntity = {
  cpf: '234242342342',
  createdAt: new Date(),
  email: 'algumEmail@email.com',
  id: 123,
  name: 'nameMock',
  password: 'senhagrandre',
  phone: '12312313',
  typeUser: UserType.User,
  updatedAt: new Date()
}