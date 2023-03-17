function CompteurBonbons() {
  return (
    <div>
      <h3>Nombre de bonbons :</h3>
      <button onClick="">Ajouter</button>
    </div>
  );
}

// Création de composant en créant des classes
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour</h1>
        <CompteurBonbons />
      </div>
    );
  }
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
