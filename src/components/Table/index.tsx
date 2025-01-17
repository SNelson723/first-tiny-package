import { ITableHeader } from "../../types";
import TBody from "./TBody";
import THead from "./THead";
import { useState, useEffect } from "react";
import { sort, SortDirection } from "../../utils/sort";
import Footer from "./Footer";
import ColumnConfigModal from "./modals/ColumnConfigModal";

export interface ITable<T> {
  data: T[];
  headers: ITableHeader[];
  backgroundColorClass?: string;
  backgroundColorStyle?: string;
  textColorClass?: string;
  textColorStyle?: string;
  footerBackgroundClass?: string;
  footerBackgroundColorStyle?: string;
  footerTextColorClass?: string;
  footerTextColorStyle?: string;
  hoverClass?: string;
  striped?: boolean;
  stripedEvenClass?: string;
  stripedOddClass?: string;
}

const Table = <T,>({
  data,
  headers,
  backgroundColorClass,
  backgroundColorStyle,
  textColorClass,
  textColorStyle,
  footerBackgroundClass,
  footerBackgroundColorStyle,
  footerTextColorClass,
  footerTextColorStyle,
  hoverClass,
  striped,
  stripedEvenClass,
  stripedOddClass,
}: ITable<T>) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [tableData, setTableData] = useState(data);
  const [selectedColumn, setSelectedColumn] = useState<ITableHeader | null>(null);
  const [showColumnConfigModal, setShowColumnConfigModal] = useState<boolean>(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [tableHeaders, setTableHeaders] = useState(headers);

  useEffect(() => {}, [tableData]);

  const handleColumnClick = (
    e: React.MouseEvent<SVGGElement>,
    header: ITableHeader,
  ) => {
    setPosition({x: e.clientX, y: e.clientY});
    setSelectedColumn(header);
    setShowColumnConfigModal(true);
  };

    const basicSort = (header: ITableHeader) => {
      if (header.dataType !== 'number') {
        setSelectedColumn(null);
      } else {
        setSelectedColumn(header);
      }

      const sortedData = sort(data, header.column as keyof T, sortDirection, header);
      setTableData(sortedData);
    };

    useEffect(() => {
      if (selectedColumn) {
        basicSort(selectedColumn as ITableHeader)
      }
    }, [sortDirection]);

  return (
    <div>
      <table query-id="table">
        <THead
          headers={tableHeaders}
          backgroundColorClass={backgroundColorClass}
          backgroundColorStyle={backgroundColorStyle}
          textColorClass={textColorClass}
          textColorStyle={textColorStyle}
          onColumnClick={handleColumnClick}
          setSortDirection={setSortDirection}
          sortDirection={sortDirection}
          setSelectedColumn={setSelectedColumn}
        />
        <TBody
          data={tableData}
          headers={tableHeaders}
          hoverClass={hoverClass}
          striped={striped}
          stripedEvenClass={stripedEvenClass}
          stripedOddClass={stripedOddClass}
        />
        <Footer
          data={data}
          selectedColumn={selectedColumn}
          footerBackgroundClass={footerBackgroundClass}
          footerBackgroundColorStyle={footerBackgroundColorStyle}
          footerTextColorClass={footerTextColorClass}
          footerTextColorStyle={footerTextColorStyle}
        />
      </table>
      <ColumnConfigModal
        open={showColumnConfigModal}
        close={() => setShowColumnConfigModal(false)}
        position={position}
        headers={tableHeaders}
        setTableHeaders={setTableHeaders}
        setSortDirection={setSortDirection}
      />
    </div>
  );
};

export default Table;
