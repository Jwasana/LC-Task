import '../styles/tailwind.css';
import '../styles/globals.css';


const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="h-screen bg-gray-500 text-black-500" >
       <Component {...pageProps} />

    </div>
 
  );
}

export default MyApp
