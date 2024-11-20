"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import * as React from "react";

export default function editar({ params }) {
  const resolvedParams = React.use(params);
  const storage = JSON.parse(localStorage.getItem("todo"));
  const tarea = storage[resolvedParams.id];
  const [titulo, setTitulo] = useState(tarea.titulo);
  const [desc, setDesc] = useState(tarea.desc);
  let update = {
    titulo: "",
    desc: "",
  };
  return (
    <div>
      <input
        type="text"
        value={titulo}
        className="form-control"
        onChange={(e) => {
          setTitulo(e.target.value);
        }}
      />
      <br />
      <textarea
        value={desc}
        className="form-control"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></textarea>
      <button
        type="button"
        className="btn btn-outline-light btn-lg m-2"
        onClick={() => {
          update.titulo = titulo;
          update.desc = desc;
          storage.splice(resolvedParams.id, 1, update);
          localStorage.setItem("todo", JSON.stringify(storage));
          redirect("/tarea/" + resolvedParams.id);
        }}
      >
        ACTUALIZAR
      </button>
    </div>
  );
}
