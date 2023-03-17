const urlImage =
  "https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg";

function Title(props) {
  const txt = props.txt;
  return <h1>{txt}</h1>;
}

function Button(props) {
  const color = props.color;
  const text = props.txt;
  const btn = <button className={color}>{text}</button>;

  return <>{btn}</>;
}

function Image(props) {
  const link = props.target;
  return <img src={link} className="card" />;
}

// Création de composant en créant des classes
function App() {
  return (
    <div className="container">
      <Title txt="Bonjour" />
      <Button color="btn btn-success" txt="Valider" />
      <Button color="btn btn-danger" txt="Cancel" />
      <Image target={urlImage} />
    </div>
  );
}

// Rendu dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
