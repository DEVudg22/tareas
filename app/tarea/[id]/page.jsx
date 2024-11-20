"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import * as React from "react";

export default function TareaPage({ params }) {
  const resolvedParams = React.use(params);
  const storage = JSON.parse(localStorage.getItem("todo"));
  const nameTarea = storage[resolvedParams.id];
  const url = "/editar/";

  return (
    <div>
      <h1 className="text-light text-center">{nameTarea.titulo}</h1>
      <div className="tarea text-light text-center fs-3 p-5">
        <p>{nameTarea.desc}</p>

        <Link href={url + resolvedParams.id}>
          <button type="button" className="btn btn-outline-light btn-lg m-3">
            EDITAR
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-outline-light btn-lg m-3"
          onClick={() => {
            storage.splice(resolvedParams.id, 1);
            localStorage.setItem("todo", JSON.stringify(storage));
            redirect("/tareas");
          }}
        >
          ELIMINAR
        </button>
      </div>
    </div>
  );
}
