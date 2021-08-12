let users = [
    { username: 'mark', password: '1234' },
    { username: 'alex', password: '1234' },
    { username: 'jonh', password: '1234' },
    { username: 'jen', password: '1234' }
]
function _id(id) {
    return document.getElementById(id)
}
function signIn() {
    let username = _id('txtuser').value
    let password = _id('txtpass').value
    console.log(username)
    console.log(password)
    let user = users.filter(
        (user) => (user.username == username && user.password == password)
    )
    console.log(user)
    if (user.length>0) {
        alert('hello')
    } else {
        alert('sign in fail!')
    }
}