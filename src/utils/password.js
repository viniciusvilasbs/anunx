import bcrypt, { hash } from 'bcrypt'

const crypto = async (pwd) => {

    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

    return password
}

const compare = async (pwd, hash) => {
    const result = await bcrypt.compare(pwd, hash)

    return result
}

export {
    crypto,
    compare,
}