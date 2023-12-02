export const encodeToken = (loginData) => {
    return btoa(JSON.stringify(loginData))
}
export const decodeToken = (token) => {
  return JSON.parse(atob(token));
};
export const isUserAuthenticated = () => {
  try {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')
    const tokenEmail = decodeToken(token).email;
    //console.log(tokenEmail == email)
    if(tokenEmail !== email) return false
  }
  catch (e) {
    return false
  }
  return true
}