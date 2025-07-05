import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import UserEditClient from '../../../../presentation/users/clients/UserEditClient';

export default function UserEditPage() {
    return (
        <Box>
            <Typography variant="h4">Editar usuário</Typography>
            <hr />
            <Link href="/users">Voltar</Link>
            <UserEditClient />
        </Box>
    );
}