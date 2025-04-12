import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BusDetalles() {
   const { id } = useParams();
   const [bus, setBus] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      if (!id || isNaN(id)) {
         navigate("/buses");
         return;
      }
      cargarDetalles();
   }, [id]);

   const cargarDetalles = async () => {
      try {
         setLoading(true);
         const res = await axios.get(`http://localhost:8080/buses/${id}`);
         setBus(res.data);
      } catch (error) {
         setError("No se pudo cargar la información del bus.");
         console.error("Error al cargar detalles:", error);
      } finally {
         setLoading(false);
      }
   };

   if (loading) return <div className="text-center mt-4"><div className="spinner-border text-primary" role="status"></div></div>;
   if (error) return <div className="alert alert-danger mt-4">{error}</div>;
   if (!bus) return <div className="alert alert-warning mt-4">No se encontró el bus.</div>;

   return (
      <div className="container mt-4">
         <h2>Detalles del Bus</h2>
         <div className="card">
            <div className="card-body">
               <h5 className="card-title">Bus #{bus.id}</h5>
               <p><strong>Número:</strong> {bus.numero}</p>
               <p><strong>Placa:</strong> {bus.placa}</p>
               <p><strong>Fecha creación:</strong> {bus.createAt ? new Date(bus.createAt).toLocaleDateString() : "Fecha no disponible"}</p>
               <p><strong>Características:</strong> {bus.caracteristica}</p>
               <p><strong>Marca:</strong> {bus.marca?.nombre || "Sin marca registrada"}</p>
               <button 
                  className="btn btn-primary"
                  onClick={() => navigate(-1)}
               >
                  Volver
               </button>
            </div>
         </div>
      </div>
   );
}