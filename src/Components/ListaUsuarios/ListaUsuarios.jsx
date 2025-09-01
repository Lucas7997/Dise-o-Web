import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/api';
import UserCard from '../UserCard/UserCard';
import styles from './ListaUsuarios.module.css'; 
function ListaUsuarios() {

const [users, setUsers] = useState([]); // Estado para almacenar usuarios
const [loading, setLoading] = useState(true); // Estado para indicar carga
const [error, setError] = useState(null); // Estado para errores

    useEffect(() => {
        async function loadUsers() {
            try {
                setLoading(true); // Inicia la carga
                const data = await fetchUsers(); // Llama a la API
                console.log("esta es la data que recibo de la api: ",data)
                setUsers(data); // Guarda los datos en el estado
                setError(null); // Limpia errores previos
            } catch (error) {
                setError('Error al cargar usuarios'); // Manejo de error
            } finally {
                setLoading(false); // Finaliza la carga, tanto si hay éxito como error
            }
        }
    loadUsers();

    }, []); // El arreglo vacío asegura que se ejecute solo una vez
    
 // 2. Se usan los estilos como propiedades del objeto 'styles'
    if (loading) return <p className={styles.mensajeEstado}>Cargando usuarios...</p>;
    if (error) return <p className={styles.mensajeEstado}>{error}</p>;

    return (
        // 2. Se usan los estilos como propiedades del objeto 'styles'
        <div className={styles.listaUsuariosContainer}>
            <h2 className={styles.tituloLista}>Nuestros Usuarios</h2>
            <ul className={styles.userList}>
                {users.map(user => (
                    <li key={user.id}>
                        <UserCard user={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;