import { PasswordService } from "./password.service";
import { LoggerService } from "./logger.service";

export class UserService {
    
    constructor(private readonly passwordService: PasswordService,
        private readonly loggerService: LoggerService) {
    }

    public createUser(userRequest: {username: string, password: string}) {
        const credentials = this.passwordService.generateSecurePassword(userRequest.password);
        const usr = {
            username: userRequest.username,
            salt: credentials.salt,
            password: credentials.pw
        }
        this.loggerService.log(`Registering user ${usr.username}, password: ${usr.password}`)
        /* Registration code */
    }
}