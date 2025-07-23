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
    <div className="bg-white shadow rounded-lg p-6 space-y-4">{children}</div>
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
            className="w-full border rounded px-4 py-2"
          />
          <div className="space-y-2">
            {["durante un’azione di gioco", "durante un’interruzione di gioco", "alla fine di un periodo"].map((val) => (
              <label key={val} className="block">
                <input
                  type="radio"
                  name="situation"
                  value={val}
                  checked={formData.situation === val}
                  onChange={(e) => handleChange("situation", e.target.value)}
                  className="mr-2"
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
            className="w-full border rounded px-4 py-2"
          />
          <input
            placeholder="Numero di maglia"
            value={formData.playerNumber}
            onChange={(e) => handleChange("playerNumber", e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
          <div className="space-y-2">
            {["squadra di casa", "squadra ospite"].map((val) => (
              <label key={val} className="block">
                <input
                  type="radio"
                  name="teamType"
                  value={val}
                  checked={formData.teamType === val}
                  onChange={(e) => handleChange("teamType", e.target.value)}
                  className="mr-2"
                />
                {val}
              </label>
            ))}
          </div>
          <input
            placeholder="Nome della squadra"
            value={formData.teamName}
            onChange={(e) => handleChange("teamName", e.target.value)}
            className="w-full border rounded px-4 py-2"
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
            className="w-full border rounded px-4 py-2 min-h-[100px]"
          />
        </FieldGroup>
      ),
    },
    {
      label: "Posizione sul campo",
      content: (
        <FieldGroup>
          <div className="space-y-2">
            <p className="font-semibold">Distanza dal disco:</p>
            {["vicino al disco/all'azione di gioco", "lontano dal disco/all'azione di gioco"].map((val) => (
              <label key={val} className="block">
                <input
                  type="radio"
                  name="puckDistance"
                  value={val}
                  checked={formData.puckDistance === val}
                  onChange={(e) => handleChange("puckDistance", e.target.value)}
                  className="mr-2"
                />
                {val}
              </label>
            ))}
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Zona del campo:</p>
            {["lungo la balaustra", "a centro pista", "davanti alla porta"].map((val) => (
              <label key={val} className="block">
                <input
                  type="radio"
                  name="fieldZone"
                  value={val}
                  checked={formData.fieldZone === val}
                  onChange={(e) => handleChange("fieldZone", e.target.value)}
                  className="mr-2"
                />
                {val}
              </label>
            ))}
          </div>
          <textarea
            placeholder="Altro"
            value={formData.other}
            onChange={(e) => handleChange("other", e.target.value)}
            className="w-full border rounded px-4 py-2 min-h-[80px]"
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
            <label key={val} className="block">
              <input
                type="radio"
                name="victimStatus"
                value={val}
                checked={formData.victimStatus === val}
                onChange={(e) => handleChange("victimStatus", e.target.value)}
                className="mr-2"
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
            <label key={val} className="block">
              <input
                type="radio"
                name="penaltyType"
                value={val}
                checked={formData.penaltyType === val}
                onChange={(e) => handleChange("penaltyType", e.target.value)}
                className="mr-2"
              />
              {val}
            </label>
          ))}
          <input
            placeholder="Regola e descrizione (es. art. 50.3 – Kneeing)"
            value={formData.rule}
            onChange={(e) => handleChange("rule", e.target.value)}
            className="w-full border rounded px-4 py-2"
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
            className="w-full border rounded px-4 py-2 min-h-[80px]"
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
      <main className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">GAHG - Rapporto arbitrale</h1>
          {!isLastStep ? (
            <>
              <h2 className="text-xl font-semibold text-gray-700">{steps[step].label}</h2>
              {steps[step].content}
              <div className="flex justify-between pt-4">
                <button
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
                >
                  Indietro
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {step === steps.length - 1 ? "Genera testo" : "Avanti"}
                </button>
              </div>
            </>
          ) : (
            <FieldGroup>
              <h2 className="text-xl font-bold mb-2 text-gray-800">Testo generato</h2>
              <textarea
                value={generateText()}
                readOnly
                className="w-full border rounded px-4 py-2 min-h-[200px] bg-gray-50"
              />
              <button
                onClick={() => setStep(0)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Compila un nuovo report
              </button>
            </FieldGroup>
          )}
        </div>
      </main>
    </>
  );
}
