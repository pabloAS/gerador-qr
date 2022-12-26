import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");
  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  }
  function handleQRcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }
  return (
    <Container id="principal">
      <h1>Gerador de QR Code 😉</h1>
      <TextField
        id="outlined-basic"
        label="Digite a sua URL"
        variant="outlined"
        value={link}
        onChange={(e) => handleQRcode(e)}
      />
      <QRCode value={link} />

      <abbr title="download">
        <Button
          id="btn"
          href={qrcodeLink}
          download={`qrcode.png`}
          variant="outlined"
        >
          Baixe o seu QR
        </Button>
      </abbr>
    </Container>
  );
}

export default App;
