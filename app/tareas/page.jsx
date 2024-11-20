"use client";

import Link from "next/link";
import { useState } from "react";

export default function TareasPage() {
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");

  const url = "/tarea/";
  let tareas = JSON.parse(localStorage.getItem("todo"));
  let tarea = {
    titulo: "",
    desc: "",
  };

  return (
    <div>
      <h1 className="text-light">LISTA DE TAREAS</h1>
      <p className="text-center">AGREGAR TAREA</p>
      <input
        className="form-control"
        type="text"
        placeholder="TÍTULO"
        value={titulo}
        onChange={(e) => {
          setTitulo(e.target.value);
        }}
      />
      <textarea
        className="form-control"
        placeholder="DESCRIPCIÓN"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></textarea>
      <button
        type="button"
        className="btn btn-outline-light btn-lg m-2"
        onClick={() => {
          tarea.titulo = titulo;
          tarea.desc = desc;
          tareas.push(tarea);
          localStorage.setItem("todo", JSON.stringify(tareas));
          location.reload();
        }}
      >
        AGREGAR
      </button>
      <br />
      {tareas.map((item, index) => (
        <Link
          key={index}
          href={url + index}
          className="list-group-item list-group-item-action list-group-item-dark d-flex "
        >
          <p className="col-3">#{index}</p>

          <p className="text-center col-9">{item.titulo}</p>
        </Link>
      ))}
    </div>
  );
}
