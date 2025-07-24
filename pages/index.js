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
          <div>
            {["durante un’azione di gioco", "durante un’interruzione di gioco", "alla fine di un periodo"].map((val) => (
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
          <div>
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
          <p><strong>Distanza dal disco:</strong></p>
          {["vicino al disco/all'azione di gioco", "lontano dal disco/all'azione di gioco"].map((val) => (
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
          <p><strong>Zona del campo:</strong></p>
          {["lungo la balaustra", "a centro pista", "davanti alla porta"].map((val) => (
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
    return `Al minuto ${formData.minute}, ${formData.situation}, il giocatore ${formData.playerName} n. ${formData.playerNumber}, della ${formData.teamType} ${formData.teamName}, ha ${formData.action}. L’episodio è avvenuto ${formData.puckDistance}, ${formData.fieldZone}. ${formData.other ? "Altro dettaglio: " + formData.other + ". " : ""}Il giocatore che ha subito il fallo ${formData.victimStatus}. All’autore del fallo è stata inflitta ${formData.penaltyType} in base alla seguente regola del regolamento ufficiale di gioco IIHF: ${formData.rule}. Ulteriori commenti: ${formData.comments}`;
  };

  return (
    <>
      <Head>
        <title>GAHG - Rapporto arbitrale</title>
      </Head>
      <main>
        <h1>GAHG - Rapporto arbitrale</h1>
        {!isLastStep ? (
          <>
            <h2>{steps[step].label}</h2>
            {steps[step].content}
            <div className="buttons">
              <button onClick={handlePrev} disabled={step === 0}>Indietro</button>
              <button onClick={handleNext}>
                {step === steps.length - 1 ? "Genera testo" : "Avanti"}
              </button>
            </div>
          </>
        ) : (
          <FieldGroup>
            <h2>Testo generato</h2>
            <textarea readOnly value={generateText()} />
            <button onClick={() => setStep(0)}>Compila un nuovo report</button>
          </FieldGroup>
        )}
      </main>
      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: sans-serif;
        }
        h1, h2 {
          text-align: center;
        }
        .field-group {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1rem 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        input, textarea {
          width: 100%;
          padding: 0.5rem;
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }
        textarea {
          height: 80vh;
          resize: none;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          background: #0070f3;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }
        button[disabled] {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
