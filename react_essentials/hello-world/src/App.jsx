import {Welcome} from './Welcome'
import Button from './Button'
import {Hello} from './Hello'
import './App.css'
import { UserProfile } from './UserProfile';
import { ContactForm } from './ContactForm';
import { StyledForm } from './StyledForm';
import { CandidateProfile } from './CandidateProfile';



function App() {
  return (
  <div>
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
