import { use } from "react";

function MyFirstComponent(){

    const message = "Hello world"
    const amount = 42
    const user = {
        userName: "alice",
        surname: "smith"
    }

    const renderSubtitle = () => {
        return <h3>This is a subtitle</h3>
    }

    const bannerStyle = {
        color: "#333",
        border: "2px solid orange",
        padding: "1rem",
        margin: "1rem",
        background: "#aaa"
    }


    return (
        <>
            <h2>{message}</h2>
            <h2>Amount: {amount * 2}</h2>
            <p>{message.toUpperCase()}</p>
            <p>{user.userName} {user.surname}</p>

            <div style={bannerStyle}>
                This is a banner
            </div>

            {/* From your JSX, you can also invoke a function that returns JSX */}
            {renderSubtitle()}
        </>
    )
}

export default MyFirstComponent;