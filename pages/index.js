import Image from "next/image";

function LoveLetter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        backgroundColor: "#ffe4e1",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff1493" }}>Minha Cartinha de Amor</h1>
      <p style={{ maxWidth: "600px", fontSize: "18px", color: "#333" }}>
        Querido(a),
        <br />
        <br />
        Aqui está um pequeno espaço para expressar tudo o que sinto por você.
        Palavras podem não ser suficientes, mas espero que essa cartinha traga
        um sorriso ao seu rosto.
        <br />
        <br />
        Com amor, <br /> Seu nome ❤️
      </p>
      <Image
        src="https://source.unsplash.com/400x300/?love,romance"
        alt="Imagem romântica"
        width={400}
        height={300}
        style={{ borderRadius: "10px", marginTop: "20px" }}
      />
    </div>
  );
}

export default LoveLetter;
