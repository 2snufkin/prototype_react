import './App.css';
import  {AllRoutes} from "./routes/AllRoutes"
import {Footer, Header} from "./components/layout";
function App() {
  return (
      <div className="flex flex-col min-h-screen ">
          <Header />
          <main className="flex-grow my-20 px-4 md:px-10 py-4">
              <AllRoutes />
          </main>
          <Footer />
      </div>


  );
}

export default App;
