import Body from "./components/Body"
import UserProvider from './store/authStore'
function App() {


  return (
    <UserProvider> 
    <Body/>
    </UserProvider>
  )
}

export default App
