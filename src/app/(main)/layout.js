
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import "../globals.css"
export default function RootLayout({children}) {
    return (
        <>
                <Navbar/>
                {}
                <div style={{display : "flex", minHeight: "800vh"}}>
                    <main style={{flex : 1, padding : "20px"}}>
                     {children}
                   </main>
                </div>
            <Footer/>
        </>
    );
}