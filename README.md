#first tiny package

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/JJpovTbanmWMdSwAsDwWPe/EivDNwEq8NHNM5GUNUftRC/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/JJpovTbanmWMdSwAsDwWPe/EivDNwEq8NHNM5GUNUftRC/tree/master)
[![codecov](https://codecov.io/gh/SNelson723/first-tiny-package/graph/badge.svg?token=1b72mc984I)](https://codecov.io/gh/SNelson723/first-tiny-package)

This is my first npm package

## Component in Library
[Select](#select)

[Table](#table)

## Select
| Prop | type | required | default value |
|:----- | :-----: | :-----: | :----- |
| data | any | ✅ | empty |
| displayValue | keyof dat | ✅ | empty |
| label | string | ✅ | empty |
| onSelect | function | | empty |
| labelPosition | 'top', 'left' | | 'top' |

## Table 
- Only scroll body. Sticky headers
- Columns customizable
- Dynamic Re-ordering
- Stats in the footer
- Filtering
- Sorting
