// Création de composant
function App() {
  return (
    <div>
      <div>
        <input />
        <p>Valeur saisie : </p>
      </div>
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
