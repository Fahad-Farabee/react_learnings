import "./App.css";

const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Function arrow component</h2>
      <Card title="Star wars" />
      <Card title="Avatar" />
      <Card title="The lion king" />
    </div>
  );
};

export default App;
