export const setItem = (key : string, value : string) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value)
    }
}

export const getItem = (key : string) => {
    let value = ""
    if (typeof  window !== "undefined") {
        value = window.localStorage.getItem(key) || ""
    }
    return value
}

export const removeItem = (key : string) => {
    if (typeof  window !== "undefined") {
        window.localStorage.removeItem(key)
    }
}


export const removeAllItem = () => {
    if (typeof  window !== "undefined") {
        window.localStorage.clear()
    }
}

export const localKey = {
    //isLogged : "usIsLogged",
    isVerify : "isVerify",
    isDelete : "isDelete",
    userInfoUS : "userInfoUS"
}
