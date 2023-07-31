import { useState } from "react"

export default function SignUpForm(){
    //handlers
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    //submit button event handler
    async function handleSubmit(e){
        e.preventDefault(); //reset/clean function
        console.log("inputs: ", userName, password);
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error)
            setError(error);
        }
    }
    //jsx
    return(
        <form action="" onSubmit={handleSubmit}>
            <h2>Sign up Form</h2>
            {error && <p>error</p>}
            <label> Username:{""}
                <input 
                type="text" 
                value={userName} 
                onChange={e=> setUserName(e.target.value)} />
            </label>
            <label> Password:
                <input 
                type="password"
                value={password}
                onChange={e=> setPassword(e.target.value)} />
            </label>
            <p>{password}</p>
            <button>Submit</button>
        </form>
    )

}