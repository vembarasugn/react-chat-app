export const wrapperStyle = () => {

    return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
}

export const errorStyle = () => {

    return {
        fontSize: "12px",
        color: "#ECB390",
        width: "100%",
        textAlign: "center",
    }
}

export const titleStyle = () => {

    return {
        fontSize: "42px",
        color: "#ECB390",
        width: "100%",
        textAlign: "center",
    }
}

export const subtitleStyle = () => {

    return {
        width: "100%",
        fontSize: "22px",
        textAlign: "center",
        color: "#ECB390",
        margin: "0px",
    }
}

export const userContainerStyle = () => {

    const mq = [`@media (min-width : 320px) and (max-width: 767px)`];

    return {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        [mq[0]]: {
            flexDirection: "column",
            alignItems: "center",
        }
    }
}

export const userWrapperStyle = () => {

    return {
        display: "flex",
        width: "150px",
        margin: "10px",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#333",
        borderRadius: "10px",
        borderColor:"grey",
        color: "#FCF8E8",
        padding: "6px 16px",
        cursor: "pointer",
        "p": {
            margin: "0"
        }
    }
}

export const thumbnailWrapperStyle = () => {

    return {
        width: "36px",
        height: "36px",
    }
}

export const uidWrapperStyle = () => {

    return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "div": {
            width: "100%"
        }
    }
}

export const inputWrapperStyle = () => {

    return {
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "input": {
            outline: "none",
            margin: "10px 30px",
            padding: "8px 25px",
            borderRadius: "3px",
            border: "1px solid #bbb",
            "&:hover": {
                backgroundColor:"CFD2CF",
                borderRadius:"8px",
                border:"2px solid grey" 
         }
        }
    }
}

export const loginBtn = () => {

    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "button": {
            outline: "none",
            backgroundColor: "#333",
            borderRadius: "10px",
            color: "white",
            padding: "9.4px 38px",
            "&:hover": {
                cursor: "pointer",
            }
        },

    }
}