// Création de composant
function App() {
  const [sentence, setSentence] = React.useState("");
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            // console.log(e.target.value);
            // setSentence = input.value;
            setSentence(e.target.value);
          }}
        />
        <p>Valeur saisie : {sentence}</p>
      </div>
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
