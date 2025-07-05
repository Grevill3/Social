import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import CreateClient from '../../../presentation/users/clients/UserCreateClient';

export default function UserCreatePage() {
    return (
        <Box>
            <Typography variant="h4">Cadastro de usuários</Typography>
            <hr />
            <Link href="/users">Voltar</Link>
            <CreateClient />
        </Box>
    );
}