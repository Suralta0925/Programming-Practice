import Card from "./components/Card";
import Footer from "./components/navBar"

function App() {

  return(
    <>
    <Footer/>
    <Card status="ongoing"/>
    <Card status="finished"/>
    <Card status="finished"/>
    <Card status="finished"/>
    <Card status="notice"/>
    <Card status="ongoing"/>
    <Card status="finished"/>
    <Card status="finished"/>
    <Card status="finished"/>
    <Card status="notice"/>
    
    </>
  );
}

export default App
