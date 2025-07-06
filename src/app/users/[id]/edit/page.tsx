import { Box } from '@mui/material';
import UserEditClient from '../../../../presentation/users/clients/UserEditClient';
import { PageTitle } from '../../../../presentation/common/components/PageTitle';

export default function UserEditPage() {
    return (
        <Box>
            <PageTitle text='Editar usuário' />
            <UserEditClient />
        </Box>
    );
}