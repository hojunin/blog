import React from "react";
import { CALLOUT } from "../../types/block";

interface CalloutProps {
  data: CALLOUT;
}

const Callout = ({ data }: CalloutProps) => {
  return <span>{data.rich_text.plain_text}</span>;
};

export default Callout;
