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

    // No call to server, simply removes the stored token from localStorage
    static signout = () => {
        localStorage.removeItem("token")
    }

    // Password is passed as the string of the password user wants to change to
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

    // Validate user using token
    static validateUser = () => {
        return fetch(baseurl + "validate", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }).then(resp => resp.json())
    }

    // Delete user authenticating with localStorage.getItem("token")
    static deleteUser = () => {
        return fetch(baseurl + "user/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }).then(resp => resp.json())
    }

    // Deposit returns message or error
    static deposit = (amount) => {
        return fetch(baseurl + "tx", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: { amount }
        }).then(resp => resp.json())
    }

    // Home object with following strcture { target, saving, location, property, rooms, parking }
    static setTarget = (home) => {
        return fetch(baseurl + "house", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(home)
        }).then(resp => resp.json())
    }

    // Home object with following strcture { target, saving, location, property, rooms, parking }
    static editTarget = (home) => {
        return fetch(baseurl + "house/edit", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(home)
        }).then(resp => resp.json())
    }

    // Delete home that is set for user. Not to be used unless absolutely necessary!
    static deleteTarget = () => {
        return fetch(baseurl + "house/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }).then(resp => resp.json())
    }

    // Housedata should be structured as such { location, rooms, property }.
    // Property has specific list
    static findTarget = (housedata) => {
        return fetch(baseurl + "getHouse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(housedata)
        })
    }

}