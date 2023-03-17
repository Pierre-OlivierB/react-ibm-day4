// Création de composant en créant des classes
function App() {
  const song = "Chachacha";
  const numberOfVotes = 149;
  const Button = <button>Vote</button>;
  const disabledButton = <button disabled>Vote</button>;

  return (
    // Ceci est ce qui va s'afficher.
    <div>
      <p>Test</p>
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
