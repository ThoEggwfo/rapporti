import { useState } from "react";

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

  const steps = [
    {
      label: "Minutaggio dell'episodio",
      content: (
        <>
          <input
            placeholder="Minuto dell'episodio"
            value={formData.minute}
            onChange={(e) => handleChange("minute", e.target.value)}
            className="input"
          />
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="situation"
                value="durante un’azione di gioco"
                checked={formData.situation === "durante un’azione di gioco"}
                onChange={(e) => handleChange("situation", e.target.value)}
              />
              Durante un’azione di gioco
            </label>
            <label>
              <input
                type="radio"
                name="situation"
                value="durante un’interruzione di gioco"
                checked={formData.situation === "durante un’interruzione di gioco"}
                onChange={(e) => handleChange("situation", e.target.value)}
              />
              Durante un’interruzione di gioco
            </label>
            <label>
              <input
                type="radio"
                name="situation"
                value="alla fine di un periodo"
                checked={formData.situation === "alla fine di un periodo"}
                onChange={(e) => handleChange("situation", e.target.value)}
              />
              Alla fine di un periodo
            </label>
          </div>
        </>
      ),
    },
    {
      label: "Giocatore in fallo",
      content: (
        <>
          <input
            placeholder="Nome del giocatore"
            value={formData.playerName}
            onChange={(e) => handleChange("playerName", e.target.value)}
            className="input"
          />
          <input
            placeholder="Numero di maglia"
            value={formData.playerNumber}
            onChange={(e) => handleChange("playerNumber", e.target.value)}
            className="input"
          />
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="teamType"
                value="squadra di casa"
                checked={formData.teamType === "squadra di casa"}
                onChange={(e) => handleChange("teamType", e.target.value)}
              />
              Squadra di casa
            </label>
            <label>
              <input
                type="radio"
                name="teamType"
                value="squadra ospite"
                checked={formData.teamType === "squadra ospite"}
                onChange={(e) => handleChange("teamType", e.target.value)}
              />
              Squadra ospite
            </label>
          </div>
          <input
            placeholder="Nome della squadra"
            value={formData.teamName}
            onChange={(e) => handleChange("teamName", e.target.value)}
            className="input"
          />
        </>
      ),
    },
    {
      label: "Descrizione dell'azione",
      content: (
        <textarea
          placeholder="Descrizione dell’azione (es. colpito l'avversario con il bastone all'altezza della testa in modo violento)"
          value={formData.action}
          onChange={(e) => handleChange("action", e.target.value)}
          className="textarea"
        />
      ),
    },
    {
      label: "Posizione sul campo",
      content: (
        <>
          <div>
            <p>Distanza dal disco:</p>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="puckDistance"
                  value="vicino al disco/all'azione di gioco"
                  checked={formData.puckDistance === "vicino al disco/all'azione di gioco"}
                  onChange={(e) => handleChange("puckDistance", e.target.value)}
                />
                Vicino al disco/all'azione di gioco
              </label>
              <label>
                <input
                  type="radio"
                  name="puckDistance"
                  value="lontano dal disco/all'azione di gioco"
                  checked={formData.puckDistance === "lontano dal disco/all'azione di gioco"}
                  onChange={(e) => handleChange("puckDistance", e.target.value)}
                />
                Lontano dal disco/all'azione di gioco
              </label>
            </div>
          </div>
          <div>
            <p>Zona del campo:</p>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="fieldZone"
                  value="lungo la balaustra"
                  checked={formData.fieldZone === "lungo la balaustra"}
                  onChange={(e) => handleChange("fieldZone", e.target.value)}
                />
                Lungo la balaustra
              </label>
              <label>
                <input
                  type="radio"
                  name="fieldZone"
                  value="a centro pista"
                  checked={formData.fieldZone === "a centro pista"}
                  onChange={(e) => handleChange("fieldZone", e.target.value)}
                />
                A centro pista
              </label>
              <label>
                <input
                  type="radio"
                  name="fieldZone"
                  value="davanti alla porta"
                  checked={formData.fieldZone === "davanti alla porta"}
                  onChange={(e) => handleChange("fieldZone", e.target.value)}
                />
                Davanti alla porta
              </label>
            </div>
          </div>
          <textarea
            placeholder="Altro"
            value={formData.other}
            onChange={(e) => handleChange("other", e.target.value)}
            className="textarea"
          />
        </>
      ),
    },
    {
      label: "Condizione del giocatore colpito",
      content: (
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="victimStatus"
              value="ha dovuto ricevere cure mediche"
              checked={formData.victimStatus === "ha dovuto ricevere cure mediche"}
              onChange={(e) => handleChange("victimStatus", e.target.value)}
            />
            Ha dovuto ricevere cure mediche
          </label>
          <label>
            <input
              type="radio"
              name="victimStatus"
              value="ha ripreso subito la partita"
              checked={formData.victimStatus === "ha ripreso subito la partita"}
              onChange={(e) => handleChange("victimStatus", e.target.value)}
            />
            Ha ripreso subito la partita
          </label>
          <label>
            <input
              type="radio"
              name="victimStatus"
              value="ha ripreso la partita dopo qualche cambio"
              checked={formData.victimStatus === "ha ripreso la partita dopo qualche cambio"}
              onChange={(e) => handleChange("victimStatus", e.target.value)}
            />
            Ha ripreso dopo qualche cambio
          </label>
          <label>
            <input
              type="radio"
              name="victimStatus"
              value="non ha più ripreso la partita"
              checked={formData.victimStatus === "non ha più ripreso la partita"}
              onChange={(e) => handleChange("victimStatus", e.target.value)}
            />
            Non ha più ripreso la partita
          </label>
        </div>
      ),
    },
    {
      label: "Tipo di penalità e regola",
      content: (
        <>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="penaltyType"
                value="di cattiva condotta (10’)"
                checked={formData.penaltyType === "di cattiva condotta (10’)"}
                onChange={(e) => handleChange("penaltyType", e.target.value)}
              />
              Penalità di cattiva condotta (10’)
            </label>
            <label>
              <input
                type="radio"
                name="penaltyType"
                value="partita di cattiva condotta (20’)"
                checked={formData.penaltyType === "partita di cattiva condotta (20’)"}
                onChange={(e) => handleChange("penaltyType", e.target.value)}
              />
              Penalità partita di cattiva condotta (20’)
            </label>
            <label>
              <input
                type="radio"
                name="penaltyType"
                value="maggiore + partita cattiva condotta (5’+20’)"
                checked={formData.penaltyType === "maggiore + partita cattiva condotta (5’+20’)"}
                onChange={(e) => handleChange("penaltyType", e.target.value)}
              />
              Penalità maggiore più penalità partita di cattiva condotta (5’+20’)
            </label>
          </div>
          <input
            placeholder="Regola e descrizione (es. art. 50.3 – Kneeing)"
            value={formData.rule}
            onChange={(e) => handleChange("rule", e.target.value)}
            className="input"
          />
        </>
      ),
    },
    {
      label: "Commenti finali",
      content: (
        <textarea
          placeholder="Commenti o note aggiuntive"
          value={formData.comments}
          onChange={(e) => handleChange("comments", e.target.value)}
          className="textarea"
        />
      ),
    },
  ];

  const canGoNext = () => {
    // Optional: Basic validation, e.g. required fields filled
    switch (step) {
      case 0:
        return formData.minute.trim() !== "" && formData.situation !== "";
      case 1:
        return formData.playerName.trim() !== "" && formData.playerNumber.trim() !== "" && formData.teamType !== "" && formData.teamName.trim() !== "";
      case 2:
        return formData.action.trim() !== "";
      case 3:
        return formData.puckDistance !== "" && formData.fieldZone !== "";
      case 4:
        return formData.victimStatus !== "";
      case 5:
        return formData.penaltyType !== "" && formData.rule.trim() !== "";
      default:
        return true;
    }
  };

  return (
    <main>
      <h1>Registrazione Episodio Hockey Inline</h1>
      <div className="step">
        <h2>{steps[step].label}</h2>
        {steps[step].content}
      </div>
      <div className="buttons">
        <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Indietro
        </button>
        {step < steps.length - 1 ? (
          <button onClick={() => canGoNext() && setStep((s) => s + 1)} disabled={!canGoNext()}>
            Avanti
          </button>
        ) : (
          <button
            onClick={() => alert("Dati inviati: " + JSON.stringify(formData, null, 2))}
          >
            Invia
          </button>
        )}
      </div>
<style jsx>{`
  .input, .textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }

  .textarea {
    min-height: 150px;
    resize: vertical;
  }

  .btn {
    background: #0070f3;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .btn:hover {
    background: #005dc1;
  }

  .btn:disabled {
    background: #aaa;
    cursor: not-allowed;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
    font-size: 1rem;
  }

  label input[type="radio"] {
    transform: scale(1.2);
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    border-left: 4px solid #0070f3;
    padding-left: 0.5rem;
  }

  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }

  .space-y-4 > * + * {
    margin-top: 1rem;
  }
`}</style>

    </main>
  );
}
