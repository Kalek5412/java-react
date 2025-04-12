import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListadoBuses() {
  const urlBase = "http://localhost:8080/buses/";
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    cargarBuses();
  }, []);

  const cargarBuses = async () => {
    const res = await axios.get(urlBase);
    setBuses(res.data);
  };

  const verDetalles = (id) => {
    navigate(`/buses/${id}`);
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h1> sistemas de bus</h1>
      </div>
      <table className="table table-hover table-striped align-middle">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">numero</th>
            <th scope="col">placa</th>
            <th scope="col">creado</th>
            <th scope="col">caracteristica</th>
            <th scope="col">marca</th>
            <th scope="col">opciones</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus, indice) => (
            <tr key={indice}>
              <th scope="row">{bus.id}</th>
              <td>{bus.numero}</td>
              <td>{bus.placa}</td>
              <td>{new Date(bus.createAt).toLocaleDateString()}</td>
              {/*   <td>{bus.createAt}</td> */}
              <td>{bus.caracteristica}</td>
              <td>{bus.marca.nombre}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => verDetalles(bus.id)}
                >
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
