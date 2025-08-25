
import { Button } from './components/Button'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/shareIcon'
import {Card} from './components/Card'
import './App.css'
import { CreateContentModal } from './components/CreateContentModal'
import { useState } from 'react'

function App() {
  const [modalOpen , setModalOpen]=useState(true);

  return (
    <><div className='flex justify-end gap-4 p-4'>

        <CreateContentModal open={modalOpen} onClose={ ()=>{
          setModalOpen(false)
        }}/>

        <Button onClick={() =>{
          setModalOpen(true);
        }} startIcon={<PlusIcon/>} variant="primary" text="Add Content" size="md"/>
        <Button startIcon={<ShareIcon/>} variant="secondary" text="Share Brain" size="md"/>
      </div>

      <div>
        <Card title="Project Ideas" type="youtube" />
      </div>
    </>
  )
}



export default App
