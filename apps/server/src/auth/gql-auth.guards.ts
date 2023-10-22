// gql-auth.guards.ts

import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext();
    req.body = ctx.getArgs().loginUserInput;
    console.log('req.body', req.body);
    console.log('req', req.body);
    return req;
  }
}
