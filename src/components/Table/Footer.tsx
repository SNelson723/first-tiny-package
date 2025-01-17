import { useEffect, useState } from "react";
import { ITableHeader } from "../../types";
import { min, max, sum, average, median } from "./aggregaters";
import { converter } from "../../utils/sort";

interface FooterProps<T> {
  data: T[];
  selectedColumn: ITableHeader | null;
  footerBackgroundClass?: string;
  footerBackgroundColorStyle?: string;
  footerTextColorClass?: string;
  footerTextColorStyle?: string;
}

const Footer = <T,>({
  data,
  selectedColumn,
  footerBackgroundClass = "bg-slate-400",
  footerBackgroundColorStyle,
  footerTextColorClass = "text-white",
  footerTextColorStyle,
}: FooterProps<T>) => {
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [sumValue, setSumValue] = useState(0);
  const [averageValue, setAverageValue] = useState(0);
  const [medianValue, setMedianValue] = useState(0);

  useEffect(() => {
    if (!data) return;
    if (data.length === 0) return;
    if (selectedColumn === null) return;
    const numbers = data.map((record) =>
      converter(String(record[selectedColumn?.column as keyof T]), "number"),
    );
    setMaxValue(max(numbers as number[]));
    setMinValue(min(numbers as number[]));
    setSumValue(sum(numbers as number[]));
    setAverageValue(average(numbers as number[]));
    setMedianValue(median(numbers as number[]));
  }, [selectedColumn, data]);

  return (
    <tfoot query-id="tfoot">
      <tr>
        {selectedColumn !== null ? (
          <td>
            <div
              className={`flex gap-4 pl-2 ${footerBackgroundClass} ${footerTextColorClass} rounded-b-lg`}
              style={{
                backgroundColor: footerBackgroundColorStyle
                  ? footerBackgroundColorStyle
                  : "",
                color: footerTextColorStyle ? footerTextColorStyle : "",
              }}
            >
              <div>Max: {maxValue.toFixed(2)}</div>
              <div>Min: {minValue.toFixed(2)}</div>
              <div>Sum: {sumValue.toFixed(2)}</div>
              <div query-id="avg">Average: {averageValue.toFixed(2)}</div>
              <div query-id="median">Median: {medianValue.toFixed(2)}</div>
              <div>Total Records: {data.length}</div>
            </div>
          </td>
        ) : (
          <td
            colSpan={9}
            className={`flex gap-4 pl-2 ${footerBackgroundClass} ${footerTextColorClass} rounded-b-lg`}
            style={{
              backgroundColor: footerBackgroundColorStyle
                ? footerBackgroundColorStyle
                : "",
              color: footerTextColorStyle ? footerTextColorStyle : "",
            }}
          >
            <div>&nbsp;</div>
          </td>
        )}
      </tr>
    </tfoot>
  );
};

export default Footer;
