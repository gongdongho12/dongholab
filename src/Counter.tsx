import React, {FC} from "react";

interface Props {
  counter: number;
}

const Counter: FC<Props> = ({ counter }) => {
  return <p>{counter}</p>
}

export default Counter
