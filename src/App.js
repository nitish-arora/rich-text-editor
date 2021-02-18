import RichTextEditor from "./components/richTextEditor";
import ErrorBoundary from "./components/errorBoundary";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">Rich Text Editor</header>
      <ErrorBoundary>
        <RichTextEditor />
      </ErrorBoundary>
    </div>
  );
}

export default App;
