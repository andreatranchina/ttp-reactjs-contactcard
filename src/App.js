import logo from './logo.svg';
import './App.css';
import ContactCard from './components/contactCard';

function App() {
  return (
    <div className="App">
      <ContactCard contactName="John Doe" mobilePhone="718-232-8483" 
      workPhone="917-398-3282" email="myemail@gmail.com"/>

     <ContactCard contactName="Jane Doe" mobilePhone="646-343-4553" 
      workPhone="333-448-3282" email="janedoe@gmail.com"/>

      <ContactCard contactName="Mary Smith" mobilePhone="917-489-4983" 
      workPhone="455-555-5555" email="marysmith@gmail.com"/>
    </div>
  );
}

export default App;
