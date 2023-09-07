// pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
