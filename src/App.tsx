import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Box } from './components/context/Box';
import { ThemeContexProvider } from './components/context/ThemeContext';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text'

function App() {


  const PersonName= {
  first: 'Uriel',
  last: 'Dahan'
  };


  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ];

  return (
    <div className='App'>
      <Greet name='uriel' messageCount={20} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>PlaceHolder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Uriel Dahan </Heading>
      </Oscar>
      <Button handleClick={(event, id)=>{console.log('clicked',event, id)}} />
      <Input value='' handleChange={(event)=>{console.log(event.target.value)}}/>
      <Container styles={{border: '8px solid black', padding: '1rem'}}/> 
      <ThemeContexProvider>
        <Box/>
      </ThemeContexProvider>
      <Private isLoggedIn={true} Component={Profile} /> 
      <List items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
      <RandomNumber/>
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>

      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}



export default App;
