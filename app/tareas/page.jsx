import Link from "next/link";

export default function TareasPage() {
  //hacer el fetch aqui
  const id = 1;
  const desc = "Nombre de la tarea";
  return (
    <div>
      <h1 className="text-light">LISTA DE TAREAS</h1>
      <button type="button" className="btn btn-outline-light btn-lg m-3">
        NUEVA TAREA
      </button>
      <div className="list-group d-flex">
        <Link
          href="/tarea"
          className="list-group-item list-group-item-action list-group-item-dark d-flex "
        >
          <p className="col-3">#{id}</p>

          <p className="text-center col-9">{desc}</p>
        </Link>
      </div>
    </div>
  );
}
