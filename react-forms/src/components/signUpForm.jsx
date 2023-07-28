import { useState } from "react"

export default function SignUpForm(){
    //handlers
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    //jsx
    return(
        <form action="">
            <h3>Sign up Form</h3>
            <label> Username:{""}
                <input type="text" />
            </label>
            <label> Password:
                <input type="text" />
            </label>
            <button>Submit</button>
        </form>
    )

}