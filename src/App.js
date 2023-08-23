import './App.css';
import  {AllRoutes} from "./routes/AllRoutes"
import {Footer, Header} from "./components/layout";
function App() {
  return (
      <div className="flex flex-col min-h-screen ">
          <Header />
          <main>
              <AllRoutes />
          </main>
          <Footer />
      </div>


  );
}

export default App;
