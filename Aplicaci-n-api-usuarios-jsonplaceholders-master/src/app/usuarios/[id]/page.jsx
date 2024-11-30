import axios from "axios";

async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default async function Usuario({ params }) {
    const usuario = await getUsuario(params.id);

    return (
        <div className="container my-5">
            <h1 className="mb-4 text-center">Información del Usuario</h1>
            <div className="card">
                <div className="card-header">
                    <h2>{usuario.name}</h2>
                </div>
                <div className="card-body">
                    <p><strong>Usuario: </strong> {usuario.username}</p>
                    <p><strong>Email: </strong> {usuario.email}</p>
                    <p><strong>Teléfono: </strong> {usuario.phone}</p>
                    <p><strong>Website: </strong> <a href={`http://${usuario.website}`} target="_blank">{usuario.website}</a></p>
                    <h4>Dirección</h4>
                    <p><strong>Calle: </strong> {usuario.address.street}, {usuario.address.suite}</p>
                    <p><strong>Ciudad: </strong> {usuario.address.city}</p>
                    <p><strong>Código Postal: </strong> {usuario.address.zipcode}</p>
                    <h4>Compañía</h4>
                    <p><strong>Nombre: </strong> {usuario.company.name}</p>
                    <p><strong>Frase: </strong> {usuario.company.catchPhrase}</p>
                    <p><strong>Especialidad: </strong> {usuario.company.bs}</p>
                </div>
            </div>
        </div>
    );
}
