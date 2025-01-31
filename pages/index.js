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
        Querida Daniela!,
        <br />
        <br />
        Eu penso em você o dia todo. Não há uma hora sequer desde o momento em
        que acordo que deixo de lembrar de você meu amor. E este site em forma
        de cartinha é mais uma forma simples de te dizer isso, de te contar o
        quão importante você é para mim. <br /> Meus planos são contigo <br />{" "}
        Meu futuro é ao seu lado <br /> Minha casa também será a sua <br /> Meus
        filhos serão teus <br /> Meu carinho é teu <br /> Meu desejo incessante
        é por você <br /> Minha felicidade é te ver sorrindo. <br /> ❤️ Te amo
        Daniela ❤️ <br /> Como exercício de uma aula eu precisava impactar
        alguém através de uma mensagem online. E adivinha em quem eu pensei? Se
        você chutou a Daniela, amor da minha vida, você acertou Dani!
        <br />
        <br />
        Se você gostou, me conta no whatsapp.
      </p>
    </div>
  );
}

export default LoveLetter;
