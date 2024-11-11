import Link from "next/link";

export default function Card() {
  const titulo = "INGRESA A TAREAS APP";
  const img = {
    ancho: 250,
    alto: 250,
    src: "https://cdn-icons-png.flaticon.com/512/951/951971.png",
  };
  return (
    <Link href="/tareas">
      <div className="card ">
        <div className="card-body fs-2 text-center">
          <p>{titulo}</p>
          <img
            src={img.src}
            alt="todo icon"
            width={img.ancho}
            height={img.alto}
          />
        </div>
      </div>
    </Link>
  );
}
