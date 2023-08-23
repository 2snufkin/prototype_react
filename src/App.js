import './App.css';
import  {AllRoutes} from "./routes/AllRoutes"
import {Footer, Header} from "./components/layout";
function App() {
  return (
      <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-grow pt-16"> {/* Added pt-16 for padding top */}
              <AllRoutes />
          </main>
          <Footer />
      </div>


  );
}

export default App;
