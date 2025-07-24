import { useState } from "react";

export default function Home() {
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
  });

  const [step, setStep] = useState(0);

  function handleChange(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  function handleNext() {
    setStep(prev => Math.min(prev + 1, steps.length));
  }

  function handlePrev() {
    setStep(prev => Math.max(prev - 1, 0));
  }

  // Einfaches CSS-in-JS-Styles-Objekt:
  const styles = {
    inputField: {
      width: "100%",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontFamily: "inherit",
      outline: "none",
      boxSizing: "border-box",
      marginBottom: "0.5rem",
      transition: "box-shadow 0.2s ease",
    },
    inputFieldFocus: {
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
      borderColor: "#3b82f6",
    },
    textareaField: {
      width: "100%",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontFamily: "inherit",
      outline: "none",
      boxSizing: "border-box",
      resize: "vertical",
      marginTop: "0.5rem",
      minHeight: "70vh",
      transition: "box-shadow 0.2s ease",
    },
    radioGroup: {
      display: "flex",
      flexDirection: "column",
      marginTop: "0.25rem",
      marginBottom: "1rem",
      gap: "0.5rem",
    },
    radioLabel: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.9rem",
      cursor: "pointer",
      userSelect: "none",
    },
    radioInput: {
      cursor: "pointer",
      accentColor: "#2563eb",
    },
    fieldGroup: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "1.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #e5e7eb",
      marginBottom: "1rem",
    },
    buttonPrimary: {
      padding: "0.5rem 1rem",
      backgroundColor: "#2563eb",
      color: "white",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.2s ease",
    },
    buttonPrimaryHover: {
      backgroundColor: "#1d4ed8",
    },
    buttonDisabled: {
      backgroundColor: "#d1d5db",
      cursor: "not-allowed",
      opacity: 0.5,
    },
    buttonSecondary: {
      padding: "0.5rem 1rem",
      backgroundColor: "#e5e7eb",
      color: "#374151",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.2s ease",
    },
    buttonSecondaryHover: {
      backgroundColor: "#d1d5db",
    },
  };

  // Für Fokus-Handling bei Input/textarea (damit man Schatten anwendet) kann man useState verwenden:
  const [focusedInput, setFocusedInput] = useState(null);

  // Beispiel: Eingabefeld mit Fokus-Style:
  function InputField({ value, onChange, placeholder, name }) {
    const isFocused = focusedInput === name;
    return (
      <input
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          ...styles.inputField,
          ...(isFocused ? styles.inputFieldFocus : {}),
        }}
        onFocus={() => setFocusedInput(name)}
        onBlur={() => setFocusedInput(null)}
      />
    );
  }

  function TextareaField({ value, onChange, placeholder, name }) {
    const isFocused = focusedInput === name;
    return (
      <textarea
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          ...styles.textareaField,
          ...(isFocused ? styles.inputFieldFocus : {}),
        }}
        onFocus={() => setFocusedInput(name)}
        onBlur={() => setFocusedInput(null)}
      />
    );
  }

  function RadioGroup({ name, options, selected, onChange, label }) {
    return (
      <div style={styles.radioGroup}>
        {label && <p style={{ fontWeight: "600", fontSize: "0.9rem" }}>{label}</p>}
        {options.map((opt) => (
          <label key={opt} style={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selected === opt}
              onChange={e => onChange(e.target.value)}
              style={styles.radioInput}
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  const FieldGroup = ({ children }) => (
    <div style={styles.fieldGroup}>{children}</div>
  );

  const steps = [
    {
      label: "Minutaggio dell'episodio 2",
      content: (
        <FieldGroup>
          <InputField
            name="minute"
            placeholder="Minuto dell'episodio"
            value={formData.minute}
            onChange={val => handleChange("minute", val)}
          />
          <RadioGroup
            name="situation"
            options={[
              "durante un’azione di gioco",
              "durante un’interruzione di gioco",
              "alla fine di un periodo",
            ]}
            selected={formData.situation}
            onChange={val => handleChange("situation", val)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Giocatore in fallo",
      content: (
        <FieldGroup>
          <InputField
            name="playerName"
            placeholder="Nome del giocatore"
            value={formData.playerName}
            onChange={val => handleChange("playerName", val)}
          />
          <InputField
            name="playerNumber"
            placeholder="Numero di maglia"
            value={formData.playerNumber}
            onChange={val => handleChange("playerNumber", val)}
          />
          <RadioGroup
            name="teamType"
            options={["squadra di casa", "squadra ospite"]}
            selected={formData.teamType}
            onChange={val => handleChange("teamType", val)}
          />
          <InputField
            name="teamName"
            placeholder="Nome della squadra"
            value={formData.teamName}
            onChange={val => handleChange("teamName", val)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Descrizione dell'azione",
      content: (
        <FieldGroup>
          <TextareaField
            name="action"
            placeholder="Descrizione dettagliata dell'azione"
            value={formData.action}
            onChange={val => handleChange("action", val)}
          />
        </FieldGroup>
      ),
    },
    {
      label: "Posizione in campo",
      content: (
        <FieldGroup>
          <RadioGroup
            name="puckDistance"
            label="Distanza dal disco:"
            options={[
              "vicino al disco/all'azione di gioco",
              "lontano dal disco/all'azione di gioco",
            ]}
            selected={formData.puckDistance}
            onChange={val => handleChange("puckDistance", val)}
          />
          <RadioGroup
            name="fieldZone"
            label="Zona del campo:"
            options={[
              "lungo la balaustra",
              "a centro pista",
              "davanti alla porta",
            ]}
            selected={formData.fieldZone}
            onChange={val => handleChange("fieldZone", val)}
          />
          <TextareaField
            name="other"
            placeholder="Altro"
            value={formData.other}
            onChange={val => handleChange("other", val)}
          />
        </FieldGroup>
      ),
    },
  ];

  return (
    <main
      style={{
        maxWidth: "768px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {step < steps.length ? (
        <>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
            {steps[step].label}
          </h2>
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
                ...styles.buttonSecondary,
                ...(step === 0 ? styles.buttonDisabled : {}),
              }}
            >
              Indietro
            </button>
            <button onClick={handleNext} style={styles.buttonPrimary}>
              Avanti
            </button>
          </div>
        </>
      ) : (
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem" }}>
            Rapporto Finale
          </h2>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              backgroundColor: "#f3f4f6",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            {JSON.stringify(formData, null, 2)}
          </pre>
          <button onClick={() => setStep(0)} style={{ ...styles.buttonPrimary, marginTop: "1rem" }}>
            Modifica
          </button>
        </div>
      )}
    </main>
  );
}


