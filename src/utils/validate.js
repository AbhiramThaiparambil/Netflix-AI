

const validate = (email,password,userName) => {

    const userNameValidate = userName ? /^[A-Za-z]\\w{5, 29}$/.test(userName) :'no user Name';
    const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidate = /^[a-zA-Z0-9]{6}$/.test(password)

    if(!emailValidate) return 'enter a valid email address'
    if(!passwordValidate) return 'enter a valid Password '
    if(userNameValidate === false) return 'enter a valid user name'
     return null
}

export {validate} 
