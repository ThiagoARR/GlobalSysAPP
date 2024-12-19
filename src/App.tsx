import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalFreight from './pages/ControleBaixaPersonal/index'; // Página de exemplo
import MainLayout from './componentes/Layout/Layout'; // Importe o MainLayout

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Wrapper para todas as rotas, usando o MainLayout */}
        <Route element={<PersonalFreight/>}>
          {/* Rota para PersonalFreight */}
          <Route path="personal-freight" element={<PersonalFreight />} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
