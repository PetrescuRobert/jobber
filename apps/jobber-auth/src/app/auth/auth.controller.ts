import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
  User,
} from '@jobber/grpc';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller()
@AuthServiceControllerMethods()
export default class AuthController implements AuthServiceController {
  authenticate(
    request: AuthenticateRequest
  ): Promise<User> | Observable<User> | User {
    return {} as any;
  }
}
