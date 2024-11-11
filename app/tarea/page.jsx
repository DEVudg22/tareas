export default function TareaPage() {
  const nameTarea = "NOMBRE DE LA TAREA";
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium totam velit vitae temporibus. Iusto nulla sit dolor quidem at quae.";
  return (
    <div>
      <h1 className="text-light text-center">{nameTarea}</h1>
      <div className="tarea text-light text-center fs-3 p-5">
        <p>{desc}</p>

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
