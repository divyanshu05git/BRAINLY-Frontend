
import { Button } from './components/Button'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/shareIcon'
import {Card} from './components/Card'
import './App.css'

function App() {
  return (
    <><div className='flex justify-end gap-4 p-4' >
        <Button startIcon={<PlusIcon/>} variant="primary" text="Add Content" size="md"/>
        <Button startIcon={<ShareIcon/>} variant="secondary" text="Share Brain" size="md"/>
      </div>
      <Card title="Project Ideas" type="youtube" />
    </>
  )
}



export default App
