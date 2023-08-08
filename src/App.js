import './App.css';
import  {AllRoutes} from "./routes/AllRoutes"
import {Footer, Header} from "./components/layout";
function App() {
  return (
      <div className="flex flex-col min-h-screen ">
          <Header />
          <div className="flex-grow my-20">
              <AllRoutes />
          </div>
          <Footer />
      </div>


  );
}

export default App;
