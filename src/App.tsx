
import { Button } from './components/Button'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/shareIcon'
import './App.css'

function App() {
  return (
    <>
      <Button startIcon={<PlusIcon/>} variant="primary" text="Add Content" size="md"/>
      <br></br>
      <Button startIcon={<ShareIcon/>} variant="secondary" text="Share" size="md"/>
    </>
  )
}

export default App
