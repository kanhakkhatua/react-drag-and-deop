import React from 'react'
import LlamaForm from "llama-forms-react";

const LamaFormTest = () => {
    const handleLogin = (data: any) => {
        console.log("Login data", data);
    };
    return (
        <>

            <LlamaForm
                schema={{
                    title: "Login Form Example",
                    description:
                        "This is an example of a login form using llama-forms-react.",
                    wizard: false, // optional (true for multi-step forms)
                    properties: {
                        email: {
                            type: "string",
                            required: true,
                        },
                        password: {
                            type: "string",
                            required: true,
                        },
                    },
                }}
                options={{
                    fields: {
                        email: {
                            type: "email",
                            label: "User Email",
                            placeholder: "Your email address",
                            description: "Email field description",
                            // validationRegex: "", // validation regex for the input field
                            errorMessage: "Email field validation error",
                            readOnly: false, // (defaults to false)
                            maxLength: 30,
                            autoFocus: true,
                            autoComplete: true,
                        },
                        password: {
                            type: "password",
                            label: "User Passsword",
                            placeholder: "Your password Please",
                            description: "Password field description",
                            validationRegex: "",
                            errorMessage: "Password field validation error",
                            readOnly: false,
                            autoFocus: false,
                            autoComplete: true,
                        },
                    },
                }}
                onSubmit={handleLogin}
            />
        </>
    )
}

export default LamaFormTest