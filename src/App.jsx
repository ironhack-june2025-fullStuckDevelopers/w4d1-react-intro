import Header from "./components/Header.jsx"
import MyFirstComponent from "./components/MyFirstComponent.jsx"
import Footer from "./components/Footer.jsx"
import User from "./components/User.jsx"

function App() {
  return (
    <>
      <Header title="Hello World" />
      
      <User firstName="Alice" surname="Smith" />
      <User firstName="Bob" surname="Brown" />
      <User firstName="Charlie" surname="Doe" />

      <MyFirstComponent />

      <Footer>
        <p>Hello world</p>
      </Footer>
    </>
  )
}

export default App
