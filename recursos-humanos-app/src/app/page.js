"use client";
import Navegacion from "@/app/plantillas/Navegacion";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AgregarEmpleado from "@/app/empleados/AgregarEmpleado";
import EditarEmpleado from "@/app/empleados/EditarEmpleado";

const { default: ListadoEmpleados } = require("./empleados/ListadoEmpleados");

function Home() {
  return (
    <div className={"container"}>
        <BrowserRouter>
            <Navegacion/>
            <Routes>
                <Route exact path={"/"} element={<ListadoEmpleados/>}/>
                <Route exact path={"/agregar"} element={<AgregarEmpleado/>}/>
                <Route exact path={"/editar/:id"} element={<EditarEmpleado/>}/>
            </Routes>
        </BrowserRouter>
    </div>

  );
}
export default Home;