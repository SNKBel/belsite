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
        backgroundImage:
          "url('https://ogimg.infoglobo.com.br/in/21956078-e9a-0cf/FT1500A/550/xYourNameDois.jpg.pagespeed.ic.ADfQbXnoGp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff1493" }}>Minha Cartinha de Amor</h1>
      <p
        style={{
          maxWidth: "600px",
          fontSize: "18px",
          color: "#333",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
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
    </div>
  );
}

export default LoveLetter;
