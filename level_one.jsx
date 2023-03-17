// Création de composant en créant des classes
function App() {
  const title_page = <h1>Composants</h1>;
  const form_comp = (
    <form className="container d-flex justify-content-between half">
      <input type="password" placeholder="Password" />
      <button className="btn btn-primary">Valider</button>
    </form>
  );

  return (
    // Ceci est ce qui va s'afficher.
    <div>
      {title_page}
      {form_comp}
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
