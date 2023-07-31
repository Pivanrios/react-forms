import { useState } from "react";


export default function Authenticate({token}){
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handler(){
        try {
            console.log("were in");
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` 
                }
              })
              const result = await response.json();
              setSuccessMessage(result.message);
              console.log(result);
        } catch (error) {
            setError(error);
        }


    }

    return(
        <>
            <h3>Authenticate</h3>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handler}>Verify</button>
            
        </>
    )
}