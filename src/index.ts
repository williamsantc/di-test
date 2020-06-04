import { PasswordService } from "./password.service";
import { UserService } from "./user.service";
import { LoggerService } from "./logger.service";

const loggerServiceInstance = new LoggerService();

const passwordServiceInstance = new PasswordService();
const userServiceInstance = new UserService(passwordServiceInstance, loggerServiceInstance);


userServiceInstance.createUser({ username: 'williamsantc', password: 'loremipsum' })

