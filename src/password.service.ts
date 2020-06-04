import { Hash, createHash } from "crypto"

export class PasswordService {

    private readonly _hashAlgo: Hash

    constructor() {
        this._hashAlgo = createHash('sha256')
    }

    private _hashPasword(pw: string) {
        return this._hashAlgo.update(pw).digest('hex')
    }

    private _generateSalt() {
        return 'some salt'
    }

    public generateSecurePassword(plainPw: string) {
        const salt = this._generateSalt()
        return { pw: this._hashPasword(salt + plainPw), salt }
    }
}