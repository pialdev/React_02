
import './App.css'
import Container from './components/layouts/Container'
import Flex from './components/layouts/Flex'
import Section from './components/layouts/Section'
import { Drill } from 'lucide-react';
import { Fuel } from 'lucide-react';

function App() {
 

  return (
    <>
     <Section>
      <Container>
      <Flex className="justify-between">
        <div className="bg-teal-500 h-100 w-100">
          <Drill className='h-40 text-white size-50' />
        </div>
        <div className="bg-red-500 h-100 w-100">
          <Fuel  className='h-40 text-white size-50'/>
        </div>
      </Flex>
     </Container>
     </Section>
    </>
  )
}

export default App
