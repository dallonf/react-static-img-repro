import React from 'react';

export default () => {
  const [x, setX] = React.useState(1);
  return (
    <div>
      <p>React Static is a progressive static site generator for React.</p>
      <pre>{x.toString()}</pre>
      <button onClick={() => setX(x => x + 1)}>Increment</button>
    </div>
  );
};
