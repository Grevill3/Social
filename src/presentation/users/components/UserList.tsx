import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { User } from '../../../domain/users/entities/User';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
    users: User[];
    onDelete: (id: string) => void;
};

export function UserList({ users, onDelete }: Props) {
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Login</TableCell>
                        <TableCell align='center'>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.login}</TableCell>
                                <TableCell align='center'>
                                    <Link href={`/users/${user.id}`}>
                                        <IconButton aria-label="Visualizar">
                                            <VisibilityOutlinedIcon />
                                        </IconButton>
                                    </Link>
                                    <Link href={`/users/${user.id}/edit`}>
                                        <IconButton aria-label="editar">
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                    <IconButton onClick={() => onDelete(user.id)} aria-label="excluir" color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
