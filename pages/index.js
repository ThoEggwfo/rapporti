import { useState, useEffect } from "react";
import Head from "next/head";


export default function Home() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    minute: "",
    situation: "",
    playerName: "",
    playerNumber: "",
    teamType: "",
    teamName: "",
    action: "",
    puckDistance: "",
    fieldZone: "",
    other: "",
    victimStatus: "",
    penaltyType: "",
    rule: "",
    comments: "",
  });

  
  const [finalText, setFinalText] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fullVictimStatusText = {
  no_cure: "non ha dovuto ricevere cure mediche e ha ripreso subito la partita",
  cure_subito: "ha dovuto ricevere cure mediche e ha ripreso subito la partita",
  cure_dopo: "ha dovuto ricevere cure mediche e ha ripreso la partita dopo qualche cambio",
  cure_niente: "ha dovuto ricevere cure mediche e non ha più ripreso la partita",
};

  const groupStyle = {
    background: "#fff",
    padding: "1.5rem",
    marginBottom: "1rem",
    borderRadius: "1rem",
    border: "1px solid #ddd",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    fontSize: "1rem",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "none",
    height: "40vh",
  };

  const smallTextareaStyle = {
    ...inputStyle,
    resize: "none",
    height: "20vh",
  };

  const radioGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "0.75rem",
  };

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
    borderBottom: "2px solid #0070f3",
    paddingBottom: "0.25rem",
  };

  const steps = [
    {
      label: "Momento dell'episodio",
      content: (
        <div style={groupStyle}>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Minuto dell'episodio
          </label>
          <input
            style={inputStyle}
            placeholder="Minuto"
            value={formData.minute}
            onChange={(e) => handleChange("minute", e.target.value)}
          />
          <div style={radioGroupStyle}>
            {[
              "durante un’azione di gioco",
              "durante un’interruzione di gioco",
              "durante una pausa",
            ].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="situation"
                  value={val}
                  checked={formData.situation === val}
                  onChange={(e) => handleChange("situation", e.target.value)}
                />{" "}
                {val}
              </label>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Giocatore in fallo",
      content: (
        <div style={groupStyle}>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Nome del giocatore
          </label>
          <input
            style={inputStyle}
            placeholder="Nome e cognome"
            value={formData.playerName}
            onChange={(e) => handleChange("playerName", e.target.value)}
          />
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Numero di maglia
          </label>
          <input
            style={inputStyle}
            placeholder="Numero"
            value={formData.playerNumber}
            onChange={(e) => handleChange("playerNumber", e.target.value)}
          />
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Nome della squadra
          </label>
          <input
            style={inputStyle}
            placeholder="Squadra"
            value={formData.teamName}
            onChange={(e) => handleChange("teamName", e.target.value)}
          />
          <div style={radioGroupStyle}>
            {["squadra di casa", "squadra ospite"].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="teamType"
                  value={val}
                  checked={formData.teamType === val}
                  onChange={(e) => handleChange("teamType", e.target.value)}
                />{" "}
                {val}
              </label>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Descrizione dell'azione",
      content: (
        <div style={groupStyle}>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Il giocatore ha ... (continua qui)
          </label>
          <label style={{ marginBottom: "4px", display: "block" }}>
            es. caricato l'avversario all'altezza della testa, colpito violentamente l'avversario con il bastone sulle gambe, ecc.
          </label>
          <textarea
            style={textareaStyle}
            placeholder="Descrizione dettagliata dell'azione"
            value={formData.action}
            onChange={(e) => handleChange("action", e.target.value)}
          />
        </div>
      ),
    },
    {
      label: "Posizione",
      content: (
        <div style={groupStyle}>
          <div style={radioGroupStyle}>
            <strong>Distanza dal disco:</strong>
            {[
              "nelle immediate vicinanze del disco",
              "lontano dal disco, non direttamente coinvolta nell'azione di gioco",
            ].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="puckDistance"
                  value={val}
                  checked={formData.puckDistance === val}
                  onChange={(e) => handleChange("puckDistance", e.target.value)}
                />{" "}
                {val}
              </label>
            ))}
          </div>
          <div style={radioGroupStyle}>
            <strong>Zona del campo:</strong>
            {["lungo la balaustra", "a centro pista", "davanti alla porta", "davanti alle panche dei giocatori"].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="fieldZone"
                  value={val}
                  checked={formData.fieldZone === val}
                  onChange={(e) => handleChange("fieldZone", e.target.value)}
                />{" "}
                {val}
              </label>
            ))}
          </div>
          <textarea
            style={smallTextareaStyle}
            placeholder="Altra zona o dettaglio (facoltativo)"
            value={formData.other}
            onChange={(e) => handleChange("other", e.target.value)}
          />
        </div>
      ),
    },
    {
      label: "Condizione del giocatore colpito",
      content: (
        <div style={groupStyle}>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Il giocatore ha dovuto ricevere cure mediche?
          </label>
          <div style={radioGroupStyle}>
  <strong>Condizione del giocatore colpito:</strong>
  {[
    { label: "No, ha ripreso subito", value: "no_cure" },
    { label: "Sì, ha ripreso subito", value: "cure_subito" },
    { label: "Sì, dopo qualche cambio", value: "cure_dopo" },
    { label: "Sì, non ha più ripreso", value: "cure_niente" },
  ].map(({ label, value }) => (
    <label key={value}>
      <input
        type="radio"
        name="victimStatus"
        value={value}
        checked={formData.victimStatus === value}
        onChange={(e) => handleChange("victimStatus", e.target.value)}
      />{" "}
      {label}
    </label>
  ))}
</div>

{formData.victimStatus && (
  <p style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#555" }}>
    {fullVictimStatusText[formData.victimStatus]}
  </p>
)}

        </div>
      ),
    },
    {
      label: "Penalità inflitta",
      content: (
        <div style={groupStyle}>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            Al giocatore è stata inflitta (oltre a eventuali penalità minori) ...
          </label>
          <div style={radioGroupStyle}>
            {[
              "una penalità di cattiva condotta (10’)",
              "una penalità partita di cattiva condotta (20’)",
              "una penalità maggiore più penalità partita di cattiva condotta (5’+20’)",
            ].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="penaltyType"
                  value={val}
                  checked={formData.penaltyType === val}
                  onChange={(e) => handleChange("penaltyType", e.target.value)}
                />{" "}
                {val}
              </label>
            ))}
          </div>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
            <br/>
  Regola del regolamento IIHF
</label>
<select
  style={inputStyle}
  value={formData.rule.startsWith("Altro:") ? "altro" : formData.rule}
  onChange={(e) => {
    const value = e.target.value;
    if (value === "altro") {
      handleChange("rule", "Altro:");
    } else {
      handleChange("rule", value);
    }
  }}
>
  <option value="">-- Seleziona la penalità --</option>
  <option value="art. 39 – Abuso agli ufficiali di gara">art. 39 – Abuso agli ufficiali di gara (10' o 20')</option>
  <option value="art. 41.4 – Carica in balaustra">art. 41.4 – Carica in balaustra</option>
  <option value="art. 42.4 – Carica scorretta">art. 42.4 – Carica scorretta</option>
  <option value="art. 43.3 – Carica da dietro">art. 43.3 – Carica da dietro</option>
  <option value="art. 45.4 – Gomitata">art. 45.4 – Gomitata</option>
  <option value="art. 46.1 – Rissa / Fighting">art. 46.1 – Rissa / Fighting</option>
  <option value="art. 48.3 – Carica contro la testa">art. 48.3 – Carica contro la testa</option>
  <option value="art. 49.3 – Calciare">art. 49.3 – Calciare</option>
  <option value="art. 50.3 – Ginocchiata">art. 50.3 – Ginocchiata</option>
  <option value="art. 52.2 – Slew Footing">art. 52.2 – Slew Footing</option>
  <option value="art. 59.3 – Colpo di bastone">art. 59.3 – Colpo di bastone</option>
  <option value="art. 60.4 – Bastone alto">art. 60.4 – Bastone alto</option>
  <option value="art. 62.3 – Spearing">art. 62.3 – Spearing</option>
  <option value="altro">Altra penalità</option>
</select>

{formData.rule.startsWith("Altro:") && (
  <input
    style={{ ...inputStyle, marginTop: "0.5rem" }}
    placeholder="Inserisci manualmente (es. art. 58.3 – Colpo col pomolo del bastone)"
    value={formData.rule.replace("Altro:", "")}
    onChange={(e) => handleChange("rule", "Altro:" + e.target.value)}
  />
)}

        </div>
      ),
    },
    {
      label: "Commenti finali",
      content: (
        <div style={groupStyle}>
          <textarea
            style={textareaStyle}
            placeholder="Ulteriori commenti (facoltativi)"
            value={formData.comments}
            onChange={(e) => handleChange("comments", e.target.value)}
          />
        </div>
      ),
    },
  ];

  const isLastStep = step === steps.length;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const generateText = () => {
    return `Al minuto ${formData.minute}, ${formData.situation}, il giocatore ${formData.playerName} (numero ${formData.playerNumber}) della ${formData.teamType} (${formData.teamName}), ha ${formData.action} L'azione si è svolta ${formData.fieldZone} ${formData.other} ${formData.puckDistance}.
Si segnala che il giocatore che ha subito il fallo ${fullVictimStatusText[formData.victimStatus]}. In base a quanto rilevato, è stata inflitta ${formData.penaltyType} al giocatore ${formData.playerName} in base all' ${formData.rule} del regolamento ufficiale di gioco IIHF.
${formData.comments}`;
  };

useEffect(() => {
  if (step === steps.length && finalText === "") {
    setFinalText(generateText());
  }
}, [step]);


const handleCopy = () => {
  navigator.clipboard.writeText(finalText).then(() => {
    alert("Testo copiato e pronto per FISG ONLINE!");
  });
};



  return (
    <>
      <Head>
        <title style={{color: "red"}}>Rapporto arbitrale GAHG</title>
      </Head>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
        <header style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#0070f3" }}>
            Rapporto arbitrale
          </h1>
        </header>

        {step < steps.length ? (
          <>
            <h2 style={headingStyle}>{steps[step].label}</h2>
            {steps[step].content}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.5rem",
              }}
            >
              <button
                onClick={handlePrev}
                disabled={step === 0}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#ccc",
                  borderRadius: "0.5rem",
                  opacity: step === 0 ? 0.5 : 1,
                  border: "none",
                  cursor: step === 0 ? "default" : "pointer",
                }}
              >
                Indietro
              </button>
              <button
                onClick={handleNext}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#0070f3",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Avanti
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 style={headingStyle}>Rapporto Finale</h2>
            <textarea
              style={{
                width: "100%",
                padding: "1rem",
                background: "#f3f3f3",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                resize: "vertical",
                minHeight: "40vh",
                fontSize: "1rem",
              }}
                value={finalText}
                onChange={(e) => setFinalText(e.target.value)}
            />
           <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    marginTop: "1.5rem",
  }}
>
  <button
    onClick={() => setStep(0)}
    style={{
      padding: "0.5rem 1rem",
      background: "#0070f3",
      color: "#fff",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer",
    }}
  >
    Modifica
  </button>

  <button
    onClick={handleCopy}
    style={{
      padding: "0.5rem 1rem",
      background: "#068541ff",
      color: "#fff",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer",
    }}
  >
    Controlla e copia
  </button>
</div>

          </div>
        )}
      </main>
    </>
  );
}
