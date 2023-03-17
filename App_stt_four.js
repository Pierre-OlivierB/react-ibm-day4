const animaux = [
  {
    name: "Rahgu",
    type: "troll",
  },
  {
    name: "Nemo",
    type: "poisson",
  },
  {
    name: "Donald Trump",
    type: "orange",
  },
];
function addAnimals(nam, typ) {
  const anim = { name: nam, type: typ };

  animaux.push(anim);
  console.log(animaux);
}
function App() {
  const [name, setName] = React.useState("");
  const [typeanim, setTypeanim] = React.useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Nom de l'animal
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="animInpt"
          />
        </label>
        <label>
          Type de l'animal
          <input
            type="text"
            onChange={(e) => setTypeanim(e.target.value)}
            id="typeInpt"
          />
        </label>
        <button
          type="submit"
          onClick={() => {
            addAnimals(name, typeanim);
            setName("");
            setTypeanim("");
            animInpt.value = "";
            typeInpt.value = "";
          }}
        >
          Sauvegarder
        </button>
      </form>

      {animaux.map((animal, index) => (
        <div key={index}>
          <p>
            {" "}
            {animal.name} - {animal.type}
          </p>
        </div>
      ))}
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
