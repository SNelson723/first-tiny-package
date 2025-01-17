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
      <Button />
      <Table data={tableData} headers={tableHeaders} />
      <div
        className="flex w-full justify-center gap-4"
        style={{ marginTop: "10px" }}
      >
        <button className="toast-error px-4 py-2 rounded-lg" onClick={handleError}>
          Error
        </button>
        <button className="toast-success px-4 py-2 rounded-lg" onClick={handleSuccess}>
          Success
        </button>
        <button className="toast-info px-4 py-2 rounded-lg" onClick={handleInfo}>
          Info
        </button>
        <button className="toast-warning px-4 py-2 rounded-lg" onClick={handleWarning}>
          Warning
        </button>
      </div>
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
