import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto) {
    const createdUser = await this.prisma.users.create({
      data: {
        Pseudo: createUserDto.pseudo,
        Mail: createUserDto.mail,
      },
    });
    return createdUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  /* findOne(id: number) {
     return `This action returns a #${id} user`;
  }*/
  public async getByUUID(uuid: string) {
    const getUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    });
    return getUser;
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
      data: {
        Pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
        Mail: !!updateUserDto.mail ? updateUserDto.mail : undefined,
      },
    });
    return updateUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
