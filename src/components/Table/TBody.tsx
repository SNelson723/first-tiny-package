import { ITableHeader } from "../../types";

export interface TBodyProps<T> {
  data: T[];
  headers: ITableHeader[];
  maxHeight?: number;
  hoverClass?: string;
  striped?: boolean;
  stripedEvenClass?: string;
  stripedOddClass?: string;
}

const THead = <T,>({
  data,
  headers,
  maxHeight = 350,
  hoverClass = "bg-blue-200",
  striped = true,
  stripedEvenClass = "even:bg-slate-200",
  stripedOddClass = "odd:bg-white",
}: TBodyProps<T>) => {

  const stripeStyle = striped
    ? `${stripedOddClass} ${stripedEvenClass}`
    : "";

  const getFormatter = (header: ITableHeader, record: T) => {
    if (header.formatter) {
      return header.formatter(String(record[header.column as keyof T]))
    } else {
       return String(record[header.column as keyof T])}
  };

  return (
    <tbody
      className="no-scrollbar"
      style={{
        maxHeight: `${maxHeight}px`,
        overflowY: "auto",
        display: "block",
      }}
    >
      {data.map((record, index) => {
        return (
          <tr
            key={`tr-${index}`}
            className={`${hoverClass ? "hover:" + hoverClass : ""} ${stripeStyle} transition-all duration-500 cursor-pointer`}
          >
            {headers.map((header, idx) => {
              return header.visible ? (
                <td
                  className={`pl-2 text-ellipsis overflow-hidden whitespace-nowrap`}
                  key={`tr-td-${index}-${idx}`}
                  style={{
                    textAlign: header.align,
                    width: `${header.width}px`,
                    maxWidth: `${header.width}px`,
                  }}
                >
                  {getFormatter(header, record)}
                </td>
              ) : null;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default THead;
