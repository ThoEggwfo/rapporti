import { useState } from "react";
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

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
    height: "70vh",
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

  const steps = [
    {
      label: "Minutaggio dell'episodio 1.0",
      content: (
        <div style={groupStyle}>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
          Minutaggio dell'episodio
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
              "alla fine di un periodo",
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
          es. caricato un avversario all'altezza della testa, colpito un avversario con il bastone sulle gambe, ecc.
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
              "vicino al disco/all'azione di gioco",
              "lontano dal disco/all'azione di gioco",
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
            {["lungo la balaustra", "a centro pista", "davanti alla porta"].map(
              (val) => (
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
              )
            )}
          </div>
          <textarea
            style={smallTextareaStyle}
            placeholder="Altro"
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
          Il giocatore ...
          </label>
          <div style={radioGroupStyle}>
            {[
              "NON ha dovuto ricevere cure mediche e ha ripreso subito la partita",
              "ha dovuto ricevere cure mediche e ha ripreso subito la partita",
              "ha dovuto ricevere cure mediche ha ripreso la partita dopo qualche cambio",
              "ha dovuto ricevere cure mediche e non ha più ripreso la partita",
            ].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="victimStatus"
                  value={val}
                  checked={formData.victimStatus === val}
                  onChange={(e) =>
                    handleChange("victimStatus", e.target.value)
                  }
                />{" "}
                {val}
              </label>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Tipo di penalità e regola",
      content: (
        <div style={groupStyle}>
          <div style={radioGroupStyle}>
            {[
              "una penalità di cattiva condotta (10’)",
              "una penalità partita di cattiva condotta (20’)",
              "una penalità maggiore + partita cattiva condotta (5’+20’)",
              "un altro tipo di penalità (vedi ulteriori commenti)",
            ].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="penaltyType"
                  value={val}
                  checked={formData.penaltyType === val}
                  onChange={(e) =>
                    handleChange("penaltyType", e.target.value)
                  }
                />{" "}
                {val}
              </label>
            ))}
          </div>
          <label style={{ fontWeight: "bold", marginBottom: "4px", display: "block" }}>
          Regola del regolamento IIHF e titolo della regola 
          </label>
          <input
            style={inputStyle}
            placeholder="(es. Art. 50.3 – Kneeing)"
            value={formData.rule}
            onChange={(e) => handleChange("rule", e.target.value)}
          />
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
    return `Al minuto ${formData.minute}, ${formData.situation}, il giocatore ${formData.playerName} n. ${formData.playerNumber},
squadra ${formData.teamType} (${formData.teamName}), ha compiuto l'azione seguente: ${formData.action}.
Posizione: ${formData.puckDistance}, ${formData.fieldZone}. Note aggiuntive: ${formData.other}.
Condizione del giocatore colpito: ${formData.victimStatus}.
Penalità: ${formData.penaltyType}. Regola: ${formData.rule}.
Commenti finali: ${formData.comments}`;
  };

  return (
    <>
      <Head>
        <title>Rapporto arbitrale GAHG</title>
      </Head>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
        {step < steps.length ? (
          <>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              {steps[step].label}
            </h2>
            {steps[step].content}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
              <button
                onClick={handlePrev}
                disabled={step === 0}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#ccc",
                  borderRadius: "0.5rem",
                  opacity: step === 0 ? 0.5 : 1,
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
                }}
              >
                Avanti
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Rapporto Finale</h2>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                background: "#f3f3f3",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              {generateText()}
            </pre>
            <button
              onClick={() => setStep(0)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                background: "#0070f3",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
            >
              Modifica
            </button>
          </div>
        )}
      </main>
    </>
  );
}
