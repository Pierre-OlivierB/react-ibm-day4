function Horloge() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setDate(new Date());
          }}
        >
          Afficher l'heure
        </button>{" "}
        Cliquer à nouveau pour rafraichir !
      </div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

// Création de composant
function App() {
  return (
    <div>
      <Horloge />
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
