// import { PimaryButton } from "./components/PrimaryButton.jsx";
// import { InputUser } from "./components/InputUser.jsx";

// function App() {
//   const title_page = <h1>Composants</h1>;
//   const form_comp = (
//     <form className="container d-flex justify-content-between half">
//       <PimaryButton />
//       <InputUser />
//     </form>
//   );
//   const btnPrimary = <button className="btn btn-primary">Valider</button>;
//   const inputUser = <input type="password" placeholder="Password" />;

//   return (
//     // Ceci est ce qui va s'afficher.
//     <div>
//       {title_page}
//       <form className="container d-flex justify-content-between half">
//         {inputUser}
//         {btnPrimary}
//       </form>
//     </div>
//   );
// }
function Titre(props) {
  const title = props.first;
  return <h1>{title}</h1>;
}

function PrimaryButton(props) {
  const ok = props.content;
  return <button className="btn btn-primary">{ok}</button>;
}

function Saisie(props) {
  const placeHold = props.name;
  return <input type="password" placeholder={placeHold} />;
}

// Création du composant final
function App() {
  return (
    <div className="container">
      <Titre first="Composants" />
      <Saisie name="Password" />
      <PrimaryButton content="Valider" />
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
