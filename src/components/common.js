let getQueryString = name => {
    let reg = new RegExp(`(^|\?|&)${name}=([^&]*)(&|$)`, 'i');
    let r = window.location.hash.match(reg);
    console.log(r)
    if (r != null) return r[2];
    return null;
}

export default getQueryString
