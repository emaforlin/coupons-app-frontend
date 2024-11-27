"use client";

import { useRouter } from "next/navigation"
import { useState } from "react";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (email === "user@example.com" && password === "1234") {
            localStorage.setItem("isLoggedIn", "true");
            router.push("/dashboard");
        } else {
            alert("Credenciales invalidas");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-xl border rounded-lg p-8 max-w-sm w-full">
                <h1 className="text-2xl font-bold text-center mb-6 text-slate-700">Login</h1>
                 <div className="space-y-4">
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 text-black">
                    </input>
                    <input 
                    type="password"
                    placeholder="Constraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 text-black">
                    </input>

                    <button
                        onClick={handleLogin}
                        className="w-full bg-green-500 hover:bg-green-700 transition duration-300 text-white py-2 rounded-lg font-semibold shadow-md">
                            Iniciar Sesion
                        </button>
                 </div>
            </div>
        </div>    
    )
}

export default Login