import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function EditarEmpleado() {

    const urlBase = "http://localhost:8080/rh-app/empleados"

    let navegacion = useNavigate();

    const {id} = useParams();

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: "",
    });

    const { nombre, departamento, sueldo } = empleado;

    useEffect(() => {
        cargarEmpleado();
    },[]);

    const cargarEmpleado = async () => {
        const resultado = await axios.get(`${urlBase}/${id}`)
        setEmpleado(resultado.data)
    }

    const onInputChange = (e) => {
        //spread operator... (expandir los atributos empleado)
        setEmpleado({...empleado, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/rh-app/empleados"
        await axios.put(`${urlBase}/${id}`, empleado);
        // Redirigir al home
        navegacion("/")
    }


    return (
        <div className={"container"}>
            <div className={"text-center"} style={{ margin: "2em" }}>
                <h3>Editar Empleado</h3>
            </div>


            <form onSubmit={(e)=> onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name={"nombre"}
                        required={true}
                        value={nombre}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">
                        Departamento
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="departamento"
                        name={"departamento"}
                        required={true}
                        value={departamento}
                        onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="sueldo" className="form-label">
                        Sueldo
                    </label>
                    <input
                        type="number"
                        step={"any"}
                        className="form-control"
                        id="sueldo"
                        name={"sueldo"}
                        required={true}
                        value={sueldo}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className={"text-center"}>
                    <button type="submit" className="btn btn-warning btn-sm me-3">
                        Guardar
                    </button>
                    <Link to={"/"} className={"btn btn-danger btn-sm"}>
                        Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
}
