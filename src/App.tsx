import React from 'react'
import { hot } from 'react-hot-loader/root'
import { TestComponent } from './components/TestComponent'
import { Counter } from './components/Counter'

export const App = hot(_App)
export function _App(): JSX.Element | null {
    return (
        <div>
            <h1>Hello World! I'm a React application!</h1>
            <TestComponent />
            <Counter />
            </div>
    )
}