import React from "react";
import { CODE } from "../../types/block";

import RichTexts from "./RichTexts";
interface CodeProps {
  code: CODE;
}
const Code = ({ code }: CodeProps) => {
  return (
    <div className=" rounded-md bg-blue-300 p-12">
      <RichTexts rich_texts={code.rich_text} />
    </div>
  );
};

export default Code;
