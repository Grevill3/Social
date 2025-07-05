import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import UserDetailClient from '../../../presentation/users/clients/UserDetailClient';

export default function UserDetailPage() {
    return (
        <Box>
            <Typography variant="h4">Detalhes do usuário</Typography>
            <hr />
            <Link href="/users">Voltar</Link>
            <UserDetailClient />
        </Box>
    );
}