const sessionIdToUserMap = new Map()
// but when the server restarts, the map will be empty again. so you will eventually loged out 

function setUser(id,user) {
    console.log("setting user",id,user)
    sessionIdToUserMap.set(id,user)
    console.log(sessionIdToUserMap)
}
function getUser(id) {
   var user =  sessionIdToUserMap.get(id)
   return user  
}
module.exports = {
    setUser, getUser
}