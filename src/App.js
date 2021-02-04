import Profile from './profile/Profile';
import tof from './assets/pic.jpg';
import './App.css';

function App() {
  
  const handleName = (firstname,lastname) => {
    alert(`Hello ${firstname} ${lastname}`)
  }

  return (
    <div className='page'>
            <Profile id='mouse'
                firstname='Mohamed' 
                lastname='Lahmer' 
                bio='Graduated 2017' 
                profession='Water ressources engineer' 
                handleName={handleName}     
            >
      <img className='image' src={tof} alt='pic' width='500px'/>
      </Profile>
    </div>
  );
}

export default App;

