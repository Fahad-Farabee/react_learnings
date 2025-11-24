import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star wars" />
      <Card title="Avatar" />
      <Card title="The lion king" />
    </div>
  );
};

export default App;
