export const idCheck = (id) => {
    let regExp = /^[0-9a-zA-Z]/;

    return regExp.test(id)
}

export const nickCheck = (nick) => {
    let regExp = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    return regExp.test(nick)
}