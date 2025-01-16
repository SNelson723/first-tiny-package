import "./App.css";
import { Button } from "first-tiny-package";
import { Select, Table } from "../../src";
import "../../dist/index.css";
import { data, IData } from "./data";
import { tableData, tableHeaders } from "./data/tableData";

function App() {
  return (
    <div>
      <Button />
      <Table data={tableData} headers={tableHeaders} />
      <Select<IData>
        data={data}
        displayKey={"name"}
        label={"Select type"}
        onSelect={(e: IData) => e}
      /> 
    </div>
  );
}

export default App;
