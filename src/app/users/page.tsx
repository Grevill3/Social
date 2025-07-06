import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { UserListClient } from '../../presentation/users/clients/UserListClient';
import { PageTitle } from '../../presentation/common/components/PageTitle';

export default function UsersPage() {
	return (
        <Box>
            <PageTitle text='Consultar usuários' />
            <Box textAlign="right" mb={2}>
                <Button component={Link} href="/users/create" variant="contained">
                    Criar Novo
                </Button>
            </Box>
      		<UserListClient  />
        </Box>
    );
}