import { useEffect } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'

function ListUsers() {

    useEffect(() => {

        async function getUsers() {
            const usersFromApi = await api.get('/usuarios')
        }
        getUsers()
    }, [])

    return (
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers