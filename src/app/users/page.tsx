import { Typography, Card, CardContent, Box, Button, CardHeader } from '@mui/material';

export default function UsersPage() {
	return (
		<Box>
			<Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
				<Typography variant="h4">Gerenciar Usuários</Typography>
				<Button variant="contained" color="primary">Novo Usuário</Button>
			</Box>
			<Card>
				<CardHeader title="Lista de Usuários" />
				<CardContent>
					Aqui vai a lista de usuários.
				</CardContent>
			</Card>
		</Box>
	);
}