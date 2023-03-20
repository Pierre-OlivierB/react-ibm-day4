/**
 * Liste des légumes
 */
const lesLegumes = [
  {
    name: "Topinambour",
    prix: 3,
  },
  {
    name: "Pois chiche",
    prix: 2,
  },
  {
    name: "Salade",
    prix: 0.9,
  },
  {
    name: "Courgette",
    prix: 1.5,
  },
  {
    name: "Oignon",
    prix: 2,
  },
];

function TitleComponent() {
  return <h1>Le panier de légumes</h1>;
}

function Legumes(props) {
  const item = props.items;

  return (
    <ul>
      {item.map((legume) => (
        <li key={legume.name}>
          <p>Name : {legume.name}</p>
          <p>Prix : {legume.prix}</p>
        </li>
      ))}
    </ul>
  );
}

// Création de composant en créant des classes
function App() {
  return (
    <div>
      <TitleComponent />
      <Legumes items={lesLegumes} />
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
