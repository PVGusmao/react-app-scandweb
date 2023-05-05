import { ReactElement } from "react";

import { DVDParameter } from "../DVDParameter/DVDParamenter";
import { BookParameter } from "../BookParameter/BookParamenter";
import { FurnitureParameter } from "../FurnitureParameter/FurnitureParameter";

interface IParameters {
  type: string;
  component: ReactElement;
}

type Props = {
  selectValue: string,
}

export function DynamicTypeParameters({ selectValue }: Props) {
  function filterSelectValue() {
    const possibleValues: IParameters[] = [
      {
        type: 'dvd',
        component: <DVDParameter />
      },
      {
        type: 'furniture',
        component: <FurnitureParameter />
      },
      {
        type: 'book',
        component: <BookParameter />
      }
    ];
  
    const correctValue = possibleValues.find((eachPossibleValue: IParameters) => eachPossibleValue?.type === selectValue);

    return correctValue?.component;
  }

  return (
    <div className="sm:w-[300px]">
      {
        filterSelectValue()
      }
    </div>
  )
}