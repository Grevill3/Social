import { Box } from '@mui/material';
import UserDetailClient from '../../../presentation/users/clients/UserDetailClient';
import { PageTitle } from '../../../presentation/common/components/PageTitle';

export default function UserDetailPage() {
    return (
        <Box>
            <PageTitle text='Consultar usuário' />
            <UserDetailClient />
        </Box>
    );
}