"use client";

export default function AuthModal({
                                      isOpen,
                                      onClose,
                                      type
                                  }: {
    isOpen: boolean;
    onClose: () => void;
    type: 'Login' | 'Register'
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500">✕</button>

                <h2 className="text-2xl font-bold mb-4">{type}</h2>
                <form className="flex flex-col gap-4">
                    <input type="email" placeholder="Email Address" className="p-2 rounded border dark:bg-zinc-800"/>
                    {type === 'Register' && (
                        <input type="email" placeholder="Confirm Email Address" className="p-2 rounded border border-foreground/10 dark:bg-zinc-800"/>
                    )}
                    <input type="password" placeholder="Password" className="p-2 rounded border dark:bg-zinc-800"/>
                    {type === 'Register' && (
                        <input type="password" placeholder="Confirm Password " className="p-2 rounded border border-foreground/10 dark:bg-zinc-800"/>
                    )}
                    <button className="bg-foreground text-background py-2 rounded-lg font-bold">
                        {type === 'Login' ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
            </div>
        </div>
    );
}