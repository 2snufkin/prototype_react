import './App.css';
import  {AllRoutes} from "./routes/AllRoutes"
import {Footer, Header} from "./components/layout";
function App() {
  return (
      <div className="flex flex-col min-h-screen ">
          {/*TODO : the burger button hide content*/}
          <Header />
          <main className="flex-grow pt-16">
              <AllRoutes />
          </main>
          <Footer />
      </div>


  );
}

export default App;
