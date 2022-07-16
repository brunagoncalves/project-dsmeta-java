// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {Header} from "./components/Header";
import {SalesCard} from "./components/SalesCard";

export function App() {

  return (
    <>
      <Header/>
      <main>
        <section id="sales">
          <div className="container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}
