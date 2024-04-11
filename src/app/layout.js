import "./globals.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";



export const metadata = {
  title: "De Novellis",
  description: "Realistic 3D renderings optimize property visibility and engagement",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
    
    <head>
        <link rel="stylesheet" href="https://use.typekit.net/onu8tip.css"/>
      </head>
 
      <body>
     <Navbar></Navbar>
      {children} 
<Footer></Footer>   
      </body>
    </html>
  );
}
