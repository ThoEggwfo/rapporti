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
    action: "Il giocatore ha ",
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

  const penaltyRuleText = formData.rule === "altro" ? formData.manualRule : formData.rule;

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
            {[
              { label: "No, ha ripreso subito", value: "no_cure" },
              { label: "Sì, ma ha ripreso subito", value: "cure_subito" },
              { label: "Sì, ma ha ripreso dopo qualche cambio", value: "cure_dopo" },
              { label: "Sì, ma non ha più ripreso", value: "cure_niente" },
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
        </div>
      ),
    },
    {
      label: "Descrizione dell'azione",
      content: (
        <div style={groupStyle}>
          <label style={{ marginBottom: "4px", display: "block" }}>
            es. Il giocatore ha caricato l'avversario all'altezza della testa, colpito violentamente l'avversario con il bastone sulle gambe, ecc.
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
              "una penalità maggiore più una penalità partita di cattiva condotta (5’+20’)",
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
            <br />
            Regola del regolamento IIHF
          </label>
          <select
            style={{
              ...inputStyle,
              padding: "0.75rem",
              border: "1px solid #0070f3",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              backgroundColor: "#f9f9f9",
              color: "#333",
              width: "99%",
            }}
            value={formData.rule}
            onChange={(e) => handleChange("rule", e.target.value)}
          >
            <option value="">-- Seleziona la penalità --</option>
            {[
              "Art. 39 – 'Abuso agli ufficiali di gara'",
              "Art. 41.4 – 'Carica in balaustra'",
              "Art. 42.4 – 'Carica scorretta'",
              "Art. 43.3 – 'Carica da dietro'",
              "Art. 45.4 – 'Gomitata'",
              "Art. 46.1 – 'Rissa / Fighting'",
              "Art. 48.3 – 'Carica contro la testa'",
              "Art. 49.3 – 'Calciare'",
              "Art. 50.3 – 'Ginocchiata'",
              "Art. 52.2 – 'Slew Footing'",
              "Art. 59.3 – 'Colpo di bastone'",
              "Art. 60.4 – 'Bastone alto'",
              "Art. 62.3 – 'Spearing'",
            ].map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
            <option value="altro">Altra penalità</option>
          </select>

          {formData.rule === "altro" && (
            <input
              style={{
                ...inputStyle,
                marginTop: "0.5rem",
                padding: "0.75rem",
                border: "1px dashed #aaa",
                borderRadius: "0.5rem",
                fontStyle: "italic",
              }}
              placeholder="Inserisci manualmente (es. 58.3 – Colpo col pomolo del bastone)"
              value={formData.manualRule || ""}
              onChange={(e) => handleChange("manualRule", e.target.value)}
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

  const cleanedAction = formData.action.trim().startsWith("Il giocatore ha")
    ? formData.action.replace(/^Il giocatore ha\s*/i, "")
    : formData.action;


  const isLastStep = step === steps.length;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const generateText = () => {
    return `Al minuto ${formData.minute}, ${formData.situation}, il giocatore ${formData.playerName} (numero ${formData.playerNumber}) della ${formData.teamType} (${formData.teamName}), ha ${cleanedAction} L'azione si è svolta ${formData.fieldZone.trim()} ${formData.other.trim()} ${formData.puckDistance.trim()}. Si segnala che il giocatore che ha subito il fallo ${fullVictimStatusText[formData.victimStatus]}. In base a quanto rilevato, è stata inflitta ${formData.penaltyType} al giocatore ${formData.playerName} in base all' ${formData.penaltyRuleText} del regolamento ufficiale di gioco IIHF.
${formData.comments}`;
  };

  useEffect(() => {
    if (step === steps.length) {
      setFinalText(generateText());
    }
  }, [step, formData]);


  const handleCopy = () => {
    navigator.clipboard.writeText(finalText).then(() => {
      alert("Testo copiato e pronto per FISG ONLINE!");
    });
  };



  return (
    <>
      <Head>
        <title style={{ color: "red" }}>Rapporto arbitrale GAHG</title>
      </Head>
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem", fontFamily: "'Inter', sans-serif" }}>
        <header style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <img
            src="/Logo.png"
            alt="Logo"
            style={{ height: "60px", width: "auto", objectFit: "contain" }}
          />
          <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#0070f3", margin: 0 }}>
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
