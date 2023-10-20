import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@/user/entities/user.entity';
import { Model, Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private readonly configService: ConfigService,
  ) {}

  async createUser(createUserInput: CreateUserInput) {
    const hash = await bcrypt.hash(
      createUserInput.password,
      Number(this.configService.get<string>('SALT_ROUND')),
    );

    const createdUser = new this.userModel({
      ...createUserInput,
      password: hash,
    });
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string): Promise<UserDocument> {
    return this.userModel.findById(id);
  }

  findOneByEmail(email: string): Promise<UserDocument> {
    const user = this.userModel.findOne().where('email').equals(email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    return user;
  }

  update(id: Schema.Types.ObjectId, updateUserInput: UpdateUserInput) {
    return this.userModel.findByIdAndUpdate(id, updateUserInput, { new: true });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
