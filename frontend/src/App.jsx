import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSample from "./page/AddSample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSample />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;