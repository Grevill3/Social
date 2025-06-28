'use client';

import { useState } from 'react';

type Props = {
    onSubmit: (data: { name: string; email: string }) => void;
    submitLabel: string;
    initialValues?: { name: string; email: string };
};

export function UserForm({ onSubmit, submitLabel, initialValues }: Props) {
    const [name, setName] = useState(initialValues?.name || '');
    const [email, setEmail] = useState(initialValues?.email || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome:</label>
                <input value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    required
                />
            </div>
            <button type="submit">{submitLabel}</button>
        </form>
    );
}
