const setCookie = (name, value, exp=5) => {
    let date = new Date();
    date.setTime(date.getTime()+exp*24*60*60*1000);

    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
}

const deleteCookie = (name) => {
    let date = new Date('2020-01-01').toUTCString();

    document.cookie = name+"=; expires="+date;
}

export {setCookie,deleteCookie}