import { kea } from 'kea'
import type { counterLogicType } from './counterLogicType';

export const counterLogic = kea<counterLogicType>({
    actions: {
        incrementCounter: true,
        decrementCounter: true,
        updateCounter: (newValue: number) => ({newValue}),
    },
    reducers: {
        count: [
            0,
            {
                incrementCounter: (state: number) => state + 1,
                decrementCounter: (state: number) => state - 1,
                updateCounter: (_: any, { newValue }: any) => newValue,
            },
        ],
    },
})
