import { ITableHeader } from "../../types";
import TBody from "./TBody";
import THead from "./THead";
import { useState, useEffect } from "react";
import { SortDirection } from "../../utils/sort";
import Footer from "./Footer";

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
  stripedOddClass
}: ITable<T>) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [tableData, setTableData] = useState(data);
  const [selectedColumn, setSelectedColumn] = useState<ITableHeader | null>(
    null,
  );

  useEffect(() => {}, [tableData]);

  return (
    <div>
      <table>
        <THead
          data={tableData}
          setTableData={setTableData}
          headers={headers}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          setSelectedColumn={setSelectedColumn}
          backgroundColorClass={backgroundColorClass}
          backgroundColorStyle={backgroundColorStyle}
          textColorClass={textColorClass}
          textColorStyle={textColorStyle}
        />
        <TBody
          data={tableData}
          headers={headers}
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
    </div>
  );
};

export default Table;
