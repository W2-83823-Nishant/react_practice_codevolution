import {Welcome} from './Welcome'
import Button from './Button'
import {Hello} from './Hello'
import './App.css'
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';


function App() {
  return (
  <div>
    <Welcome name="Vishwas"/>
    <Product 
    title= "Gaming Laptop"
    price={1299.99}
    inStock={true}
    categories={["Electronics", "Computers", "Gaming"]} 
    />
    <StyledForm/>
    <ContactForm/>
    <UserProfile/>
    <CandidateProfile/>
    <Hello/>
    <Welcome/>
    <Button/>
  </div>
  );
}

export default App
