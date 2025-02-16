import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind!</h1>
      <p className="text-gray-700">This is a React app with Tailwind CSS.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </div>
  );
}

export default App;
