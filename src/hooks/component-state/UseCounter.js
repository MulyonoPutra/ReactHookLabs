import { useState } from "react";

function useCounter(props) {
  const [state, setState] = useState(props);

  const handleState = () => {
    setState(currentState => state + 1);
  };

  const handleTripleLike = () => {
    handleState();
    handleState();
    handleState();
  };

  return [state, handleState, handleTripleLike];
}

export default useCounter;
