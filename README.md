#first tiny package

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/JJpovTbanmWMdSwAsDwWPe/EivDNwEq8NHNM5GUNUftRC/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/JJpovTbanmWMdSwAsDwWPe/EivDNwEq8NHNM5GUNUftRC/tree/master)
[![codecov](https://codecov.io/gh/SNelson723/first-tiny-package/graph/badge.svg?token=1b72mc984I)](https://codecov.io/gh/SNelson723/first-tiny-package)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/SNelson723/first-tiny-package)
![GitHub License](https://img.shields.io/github/license/SNelson723/first-tiny-package)
![GitHub package.json version](https://img.shields.io/github/package-json/v/SNelson723/first-tiny-package)



This is a tiny TypeScript package with the following components:
## Component in Library
[Select](#select)
[Table](#table)

## Installation
```js
  npm install first-tiny-package
```

## Select
| Prop | type | required | default value |
|:----- | :-----: | :-----: | :----- |
| data | any | ✅ | empty |
| displayValue | keyof data | ✅ | empty |
| label | string | ✅ | empty |
| onSelect | function | | empty |
| labelPosition | 'top', 'left' | | 'top' |

```js
  <Select<IData>
    data={data}
    displayKey={"name"}
    label={"Select type"}
    onSelect={(e: IData) => e}
  /> 
```

## Table 
| Prop | type | required | default value |
|:----- | :-----: | :-----: | :----- |
| data | any | ✅ | empty |
| headers | ITableHeader[] | ✅ | empty |
| backgroundColorClass | string | | empty |
| backgroundColorStyle | string | | empty |
| textColorClass | string | | empty |
| textColorStyle | string | | empty |
| footerBackgroundClass | string |  | empty |
| footerBackgroundColorStyle | string | | empty |
| footerTextColorClass | string | | empty |
| footerTextColorStyle | string | | empty |
| hoverClass | string |  | empty |
| striped | boolean | | true |
| stripedEvenClass | string | | empty |
| stripedOddClass | string | | empty |

```js
<Table data={tableData} headers={tableHeaders} />
```