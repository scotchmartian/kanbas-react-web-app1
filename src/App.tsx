import Labs from "./Labs";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
         <Route path="/" element={<Navigate to="Labs" />} />
         <Route path="/Labs/*" element={<Labs />} />
      </Routes>
      </div>
    </HashRouter>
);}


