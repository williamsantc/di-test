
export class LoggerService {

    private static _DEFAULT_SCOPE = 'Logger';

    public log(msg: string, scope?: FunctionConstructor) {
        const scopeName = scope? scope.constructor.name : LoggerService._DEFAULT_SCOPE
        console.log(`[${scopeName}] ${msg}`)
    }
}