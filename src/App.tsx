import React, {ReactNode} from 'react';
import './App.css';
import {countState} from "./atoms";
import {Provider, useAtom, useAtomValue} from "jotai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider>
          <ProviderComponent >
            <ProviderNestComponent />
          </ProviderComponent>
        </Provider>
        <ProviderLessComponent />
        <ProviderLessBrotherComponent />
      </header>
    </div>
  );
}

const ProviderLessComponent = () => {
  const [count, setCount] = useAtom(countState);

  return (
    <div>
      <h1>Provider Less</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

const ProviderLessBrotherComponent = () => {
  const count = useAtomValue(countState);

  return (
    <div>
      <h1>Provider Less Brother</h1>
      <div>{count}</div>
    </div>
  )
}

const ProviderComponent = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useAtom(countState);

  return (
    <div>
      <h1>Provider</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      {children}
    </div>
  );
}

const ProviderNestComponent = () => {
  const count = useAtomValue(countState);

  return (
    <div>
      <h1>Provider Nest</h1>
      <div>{count}</div>
    </div>
  )
}

export default App;
