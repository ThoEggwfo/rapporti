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
          <div>
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
          <div>
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
          <div>
            <p>Zona del campo:</p>
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
        <div>
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
          <div>
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
          placeholder="Ulteriori commenti (facoltativi)"
          value={formData.comments}
          onChange={(e) => handleChange("comments", e.target.value)}
          className="textarea"
        />
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
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {!isLastStep ? (
        <>
          <h2 className="text-xl font-semibold">{steps[step].label}</h2>
          <div className="space-y-2">{steps[step].content}</div>
          <div className="flex justify-between pt-4">
            <button onClick={handlePrev} disabled={step === 0} className="btn">
              Indietro
            </button>
            <button onClick={handleNext} className="btn">
              {step === steps.length - 1 ? "Genera testo" : "Avanti"}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-2">Testo Generato</h2>
          <textarea
            value={generateText()}
            readOnly
            className="textarea min-h-[200px]"
          />
          <button onClick={() => setStep(0)} className="btn mt-4">
            Compila un nuovo report
          </button>
        </div>
      )}
      <style jsx>{`
        .input, .textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .btn {
          background: #0070f3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
        .btn:disabled {
          background: #aaa;
          cursor: not-allowed;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          cursor: pointer;
        }
        label input {
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
}
