import { useState } from "react";

function Login({ onLogin }) {
    // 1. Fixed useState syntax
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // 2. Logic: Alert if either field is empty
        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        // 3. Pass the data to the parent component
        onLogin({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {/* 4. Fixed input attribute syntax */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
