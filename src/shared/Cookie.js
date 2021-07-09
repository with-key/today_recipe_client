const setCookie = (name, value, exp=5) => {
    let date = new Date();
    date.setTime(date.getTime()+exp*24*60*60*1000);

    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
}

export {setCookie}