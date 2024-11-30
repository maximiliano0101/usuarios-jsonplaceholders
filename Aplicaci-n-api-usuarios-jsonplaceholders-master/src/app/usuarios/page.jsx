import axios from "axios";
import Link from "next/link";
async function getUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

export default async function Usuarios(){
    const usuarios = await getUsuarios();
    return(
        <>
        <h1>Usuarios</h1>
    <table className="table table-bordered">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
        </tr>
    </thead>
    <tbody>
        {
            usuarios.map((usuario,i)=>(
                <tr key={i}>
                <th scope="row">{usuario.id}</th>
                <td>
                    <Link href={`/usuarios/${usuario.id}`}>{usuario.name}</Link>
                </td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
            </tr>
            ))
        }
    </tbody>
    </table>
        </>
    );
}