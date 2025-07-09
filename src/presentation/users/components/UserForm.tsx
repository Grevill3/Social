'use client';

import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
    onSubmit: (data: { name: string; email: string; login: string }) => void;
    submitLabel: string;
    initialValues?: { name: string; email: string; login: string };
};

export function UserForm({ onSubmit, submitLabel, initialValues }: Props) {
    const [name, setName] = useState(initialValues?.name || '');
    const [email, setEmail] = useState(initialValues?.email || '');
    const [login, setLogin] = useState(initialValues?.login || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email, login });
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        label="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextField
                        label="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Box textAlign="right">
                        <Button type="button" component={Link} variant="outlined" href="/users" sx={{marginRight: '7px'}}>Voltar</Button>
                        <Button type="submit" variant="contained" color="primary">{submitLabel}</Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
}
