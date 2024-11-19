"use client";

export default function TareaPage({ params }) {
  const storage = JSON.parse(localStorage.getItem("todo"));
  const nameTarea = storage[params.id];

  return (
    <div>
      <h1 className="text-light text-center">{nameTarea.titulo}</h1>
      <div className="tarea text-light text-center fs-3 p-5">
        <p>{nameTarea.desc}</p>

        <button type="button" className="btn btn-outline-light btn-lg m-3">
          EDITAR
        </button>

        <button type="button" className="btn btn-outline-light btn-lg m-3">
          ELIMINAR
        </button>
      </div>
    </div>
  );
}
