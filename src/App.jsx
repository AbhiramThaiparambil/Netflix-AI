import Body from "./components/Body"
import UserProvider from './store/authStore'
import appStore from "./store/appStore"
import { Provider } from "react-redux"
function App() {


  return (
    <Provider store={appStore} > 
    <UserProvider> 
    <Body/>
    </UserProvider>
    </Provider>
  )
}

export default App
