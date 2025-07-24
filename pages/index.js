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

  const FieldGroup = ({ children }) => (
    <div className="field-group">{children}</div>
  );

  const steps = [
    {
      label: "Minutaggio dell'episodio",
      content: (
        <FieldGroup>
          <input
            placeholder="Minuto dell'episodio"
            value={formData.minute}
            onChange={(e) => handleChange("minute", e.target.value)}
          />
          <div className="radio-group">
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
                />
                {val}
              </label>
            ))}
          </div>
        </FieldGroup>
      ),
    },
    {
      label: "Giocatore in fallo",
      content: (
        <FieldGroup>
          <input
            placeholder="Nome del giocatore"
            value={formData.playerName}
            onChange={(e) => handleChange("playerName", e.target.value)}
          />
          <input
            placeholder="Numero di maglia"
            value={formData.playerNumber}
            onChange={(e) => handleChange("playerNumber", e.target.value)}
          />
          <div className="radio-group">
            {["squadra di casa", "squadra ospite"].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="teamType"
                  value={val}
                  checked={formData.teamType === val}
                  onChange={(e) => handleChange("teamType", e.target.value)}
                />
                {val}
              </label>
            ))}
          </div>
          <input
            placeholder="Nome della squadra"
            value={formData.teamName}
            onChange={(e) => handleChange("teamName", e.target.value)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Descrizione dell'azione",
      content: (
        <FieldGroup>
          <textarea
            placeholder="Descrizione dettagliata dell'azione"
            value={formData.action}
            onChange={(e) => handleChange("action", e.target.value)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Posizione sul campo",
      content: (
        <FieldGroup>
          <div className="radio-group">
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
                />
                {val}
              </label>
            ))}
          </div>
          <div className="radio-group">
            <strong>Zona del campo:</strong>
            {[
              "lungo la balaustra",
              "a centro pista",
              "davanti alla porta",
            ].map((val) => (
              <label key={val}>
                <input
                  type="radio"
                  name="fieldZone"
                  value={val}
                  checked={formData.fieldZone === val}
                  onChange={(e) => handleChange("fieldZone", e.target.value)}
                />
                {val}
              </label>
            ))}
          </div>
          <textarea
            placeholder="Altro"
            value={formData.other}
            onChange={(e) => handleChange("other", e.target.value)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Condizione del giocatore colpito",
      content: (
        <FieldGroup>
          {[
            "ha dovuto ricevere cure mediche",
            "ha ripreso subito la partita",
            "ha ripreso la partita dopo qualche cambio",
            "non ha più ripreso la partita",
          ].map((val) => (
            <label key={val}>
              <input
                type="radio"
                name="victimStatus"
                value={val}
                checked={formData.victimStatus === val}
                onChange={(e) => handleChange("victimStatus", e.target.value)}
              />
              {val}
            </label>
          ))}
        </FieldGroup>
      ),
    },
    {
      label: "Tipo di penalità e regola",
      content: (
        <FieldGroup>
          {[
            "di cattiva condotta (10’)",
            "partita di cattiva condotta (20’)",
            "maggiore + partita cattiva condotta (5’+20’)",
          ].map((val) => (
            <label key={val}>
              <input
                type="radio"
                name="penaltyType"
                value={val}
                checked={formData.penaltyType === val}
                onChange={(e) => handleChange("penaltyType", e.target.value)}
              />
              {val}
            </label>
          ))}
          <input
            placeholder="Regola e descrizione (es. art. 50.3 – Kneeing)"
            value={formData.rule}
            onChange={(e) => handleChange("rule", e.target.value)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Commenti finali",
      content: (
        <FieldGroup>
          <textarea
            placeholder="Ulteriori commenti (facoltativi)"
            value={formData.comments}
            onChange={(e) => handleChange("comments", e.target.value)}
          />
        </FieldGroup>
      ),
    },
  ];

  const isLastStep = step === steps.length;
  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const generateText = () => {
    return `Al minuto ${formData.minute}, ${formData.situation}, il giocatore ${formData.playerName} n. ${formData.playerNumber}, della ${formData.teamType} ${formData.teamName}, ha ${formData.action}. L’episodio è avvenuto ${formData.puckDistance}, ${formData.fieldZone}. ${
      formData.other ? "Altro dettaglio: " + formData.other + ". " : ""
    }Il giocatore che ha subito il fallo ${formData.victimStatus}. All’autore del fallo è stata inflitta ${formData.penaltyType} in base alla seguente regola del regolamento ufficiale di gioco IIHF: ${formData.rule}. Ulteriori commenti: ${formData.comments}`;
  };

  return (
    <>
      <Head>
        <title>GAHG - Rapporto arbitrale</title>
      </Head>
      <main>
        <div className="container">
          <h1>GAHG - Rapporto arbitrale</h1>
          {!isLastStep ? (
            <>
              <h2>{steps[step].label}</h2>
              {steps[step].content}
              <div className="buttons">
                <button onClick={handlePrev} disabled={step === 0}>
                  Indietro
                </button>
                <button onClick={handleNext}>
                  {step === steps.length - 1 ? "Genera testo" : "Avanti"}
                </button>
              </div>
            </>
          ) : (
            <FieldGroup>
              <h2>Testo generato</h2>
              <textarea value={generateText()} readOnly />
              <button onClick={() => setStep(0)}>Compila un nuovo report</button>
            </FieldGroup>
          )}
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 2rem;
          background: #f7fafc;
          min-height: 100vh;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        input,
        textarea {
          width: 100%;
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          margin-bottom: 1rem;
        }
        textarea {
          min-height: 120px;
          resize: vertical;
        }
        .field-group {
          background: #fdfdfd;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          margin-bottom: 2rem;
        }
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }
        button {
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }
        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        button:not(:disabled) {
          background: #3182ce;
          color: white;
        }
      `}</style>
    </>
  );
}
