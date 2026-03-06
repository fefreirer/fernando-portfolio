import Portfolio from './components/Portfolio';
import portfolioData from './data/data.json';
import type { PortfolioData } from './types/portfolio';

function App() {
  return <Portfolio data={portfolioData as PortfolioData} />;
}

export default App;
