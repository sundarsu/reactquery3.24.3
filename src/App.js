import logo from './logo.svg';
import './App.css';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SubApp></SubApp>
      </header>
      </QueryClientProvider>
    </div>
  );
}

function SubApp() {
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  async function doSomething(num)
  {
    await timeout(1000);
    return [num+1, num+2, num+3];
  }
  
  const {data, status} = useQuery(['hi'], () => doSomething(25));

  return !status.includes('success') ? <></> : data.map((num) => <p>{num}</p>);
}

export default App;
