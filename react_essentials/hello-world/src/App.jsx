import {Welcome} from './Welcome'
import Button from './Button'
import {Hello} from './Hello'
import './App.css'
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';
import { Product } from './Product';
import { Greeting } from './Greeting';
import { CardWrapper } from './CardWrapper';


function App() {
  return (
  <div>
    <Welcome name="Vishwas"/>
    <Greeting name="Vishwas" message="Welcome to React"/>
    <Greeting name="Nisha"   message = "Welcome to React"/>
    
    <CardWrapper title = "User Profile">
      <p>Bruce Wayne</p>
      <p>Batman@jil.com</p>
      <button>Edit profile</button>
    </CardWrapper>

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
    <Welcome name="nishant"/>
    <Button/>
  </div>
  );
}

export default App
