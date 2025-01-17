import "./App.css";
import { Button } from "first-tiny-package";
import { Select, Table } from "../../src";
import "../../dist/index.css";
import { data, IData } from "./data";
import { tableData, tableHeaders } from "./data/tableData";
import { useToast } from "../../src";

function App() {
  const toast = useToast();

  const handleError = () => {
    toast.error("This is an error message");
  };

  const handleSuccess = () => {
    toast.success("This is a success message");
  };

  const handleInfo = () => {
    toast.info("This is an info message");
  };

  const handleWarning = () => {
    toast.warning("This is a warning message");
  };

  return (
    <div>
      <div className="flex">
        <button onClick={handleError}>Error</button>
        <button onClick={handleSuccess}>Success</button>
        <button onClick={handleInfo}>Info</button>
        <button onClick={handleWarning}>Warning</button>
      </div>
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
