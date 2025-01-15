import './App.css';
import { Button } from 'first-tiny-package';
import { Select } from '../../src';
import '../../dist/index.css';
import { data, IData } from './data';

function App() {
  return (
    <div>
      <Button />
      <Select<IData> data={data} displayKey={'name'} valueKey={'id'} label={'Select a user type'} onSelect={(e) => console.log(e)} />
    </div>
  )
}

export default App;
