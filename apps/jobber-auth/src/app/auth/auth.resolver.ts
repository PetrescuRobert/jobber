import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/login.input';
import { GqlContext } from '@jobber/nestjs';
import { AuthService } from './auth.service';
import { User } from '../users/models/user.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() ctx: GqlContext
  ) {
    return this.authService.login(loginInput, ctx.res);
  }
}
