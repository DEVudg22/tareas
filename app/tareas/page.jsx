"use client";

import Link from "next/link";

export default function TareasPage() {
  //hacer el fetch aqui

  const url = "/tarea/";
  let tareas = [];

  if (localStorage.getItem("todo")) {
    tareas = JSON.parse(localStorage.getItem("todo"));
  } else {
    tareas = [
      {
        titulo: "tarea 1",
        desc: "descripcion tarea 1",
      },
      {
        titulo: "tarea 2",
        desc: "descripcion tarea 2",
      },
    ];

    localStorage.setItem("todo", JSON.stringify(tareas));
  }

  return (
    <>
      <div>
        <h1 className="text-light">LISTA DE TAREAS</h1>
        <p className="text-center">AGREGAR TAREA</p>
        <input className="form-control" type="text" /> <br />
        <div className="list-group d-flex">
          {tareas.map((item, index) => (
            <Link
              href={url + index}
              className="list-group-item list-group-item-action list-group-item-dark d-flex "
            >
              <p className="col-3">#{index}</p>

              <p className="text-center col-9">{item.titulo}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
