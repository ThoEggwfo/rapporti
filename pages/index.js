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
    <div className="bg-white rounded-2xl p-6 shadow space-y-4 border border-gray-200">
      {children}
    </div>
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
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col space-y-2 pt-2">
            {[
              "durante un’azione di gioco",
              "durante un’interruzione di gioco",
              "alla fine di un periodo",
            ].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="situation"
                  value={val}
                  checked={formData.situation === val}
                  onChange={(e) => handleChange("situation", e.target.value)}
                  className="accent-blue-600"
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
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Numero di maglia"
            value={formData.playerNumber}
            onChange={(e) => handleChange("playerNumber", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col space-y-2">
            {["squadra di casa", "squadra ospite"].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="teamType"
                  value={val}
                  checked={formData.teamType === val}
                  onChange={(e) => handleChange("teamType", e.target.value)}
                  className="accent-blue-600"
                />
                {val}
              </label>
            ))}
          </div>
          <input
            placeholder="Nome della squadra"
            value={formData.teamName}
            onChange={(e) => handleChange("teamName", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full min-h-[70vh] border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FieldGroup>
      ),
    },
    {
      label: "Posizione sul campo",
      content: (
        <FieldGroup>
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-sm">Distanza dal disco:</p>
            {[
              "vicino al disco/all'azione di gioco",
              "lontano dal disco/all'azione di gioco",
            ].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="puckDistance"
                  value={val}
                  checked={formData.puckDistance === val}
                  onChange={(e) => handleChange("puckDistance", e.target.value)}
                  className="accent-blue-600"
                />
                {val}
              </label>
            ))}
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <p className="font-semibold text-sm">Zona del campo:</p>
            {["lungo la balaustra", "a centro pista", "davanti alla porta"].map(
              (val) => (
                <label key={val} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="fieldZone"
                    value={val}
                    checked={formData.fieldZone === val}
                    onChange={(e) => handleChange("fieldZone", e.target.value)}
                    className="accent-blue-600"
                  />
                  {val}
                </label>
              )
            )}
          </div>
          <textarea
            placeholder="Altro"
            value={formData.other}
            onChange={(e) => handleChange("other", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 resize-none mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FieldGroup>
      ),
    },
    {
      label: "Condizione del giocatore colpito",
      content: (
        <FieldGroup>
          <div className="flex flex-col space-y-2">
            {[
              "ha dovuto ricevere cure mediche",
              "ha ripreso subito la partita",
              "ha ripreso la partita dopo qualche cambio",
              "non ha più ripreso la partita",
            ].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="victimStatus"
                  value={val}
                  checked={formData.victimStatus === val}
                  onChange={(e) => handleChange("victimStatus", e.target.value)}
                  className="accent-blue-600"
                />
                {val}
              </label>
            ))}
          </div>
        </FieldGroup>
      ),
    },
    {
      label: "Tipo di penalità e regola",
      content: (
        <FieldGroup>
          <div className="flex flex-col space-y-2">
            {[
              "di cattiva condotta (10’)",
              "partita di cattiva condotta (20’)",
              "maggiore + partita cattiva condotta (5’+20’)",
            ].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="penaltyType"
                  value={val}
                  checked={formData.penaltyType === val}
                  onChange={(e) => handleChange("penaltyType", e.target.value)}
                  className="accent-blue-600"
                />
                {val}
              </label>
            ))}
          </div>
          <input
            placeholder="Regola e descrizione (es. art. 50.3 – Kneeing)"
            value={formData.rule}
            onChange={(e) => handleChange("rule", e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full min-h-[70vh] border border-gray-300 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FieldGroup>
      ),
    },
  ];

  const isLastStep = step === steps.length;
  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

  const generateText = () => {
    return `Al minuto ${formData.minute}, ${formData.situation}, il giocatore ${formData.playerName} n. ${formData.playerNumber},
