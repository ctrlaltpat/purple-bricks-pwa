const baseurl = "https://purplebricks.herokuapp.com/api/v1/"
export default class Api {
    
    // Userdata is passed as an object of { email, password }. Returns token.
    static signin = (userdata) => {
        return fetch(baseurl + "signin", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(userdata)
        }).then(resp => resp.json())
    }

    // Userdata is passed as an object of { email, password, firstname, lastname }. Returns token.
    static signup = (userdata) => {
        return fetch(baseurl + "signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userdata)
        }).then(resp => resp.json())
    }

    static signout = () => {
        localStorage.removeItem("token")
    }

    static resetPassword = (password) => {
        const token = localStorage.getItem("token")

        return fetch(baseurl + "reset", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: { password }
        }).then(resp => resp.json())
    }
}