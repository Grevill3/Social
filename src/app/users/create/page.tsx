import { Box } from '@mui/material';
import CreateClient from '../../../presentation/users/clients/UserCreateClient';
import { PageTitle } from '../../../presentation/common/components/PageTitle';

export default function UserCreatePage() {
    return (
        <Box>
            <PageTitle text='Cadastrar usuário' />
            <CreateClient />
        </Box>
    );
}