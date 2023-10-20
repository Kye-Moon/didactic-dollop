import { Field, InputType } from '@nestjs/graphql';
import { Schema } from 'mongoose';

@InputType()
export class UpdatePasswordInput {
  @Field(() => String)
  _id: Schema.Types.ObjectId;

  @Field(() => String)
  password: string;
}
