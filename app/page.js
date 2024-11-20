"use client";
import Card from "./components/Card";

export default function Home() {
  if (localStorage.getItem("todo") === null) {
    localStorage.setItem("todo", JSON.stringify([]));
  }
  return (
    <>
      <Card />
    </>
  );
}
