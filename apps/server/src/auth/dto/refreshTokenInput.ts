import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RefreshTokenInput {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  refreshToken: string;
}
