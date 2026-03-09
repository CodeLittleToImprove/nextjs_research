"use client"; // Required for useState and onClick

import {useState} from "react";
import AuthModal from "./AuthModal";

export default function Header() {
    const [modalType, setModalType] = useState<'Login' | 'Register' | null>(null);

    return (
        <header className="p-4 border-b border-foreground/10 flex justify-between items-center">
            <h1 className="font-bold">Ft_transcendence</h1>

            <nav className="space-x-4">
                {/* We use buttons instead of <a> because they don't change the URL */}
                <button
                    onClick={() => setModalType('Login')}
                    className="hover:text-blue-500 transition"
                >
                    Login
                </button>
                <button
                    onClick={() => setModalType('Register')}
                    className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium"
                >
                    Register
                </button>
            </nav>

            {/* The Modal Component - only shows when modalType isn't null */}
            <AuthModal
                isOpen={modalType !== null}
                onClose={() => setModalType(null)}
                type={modalType || 'Login'}
            />
        </header>
    );
}