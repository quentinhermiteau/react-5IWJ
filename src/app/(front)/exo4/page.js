'use client'

import Button from "@/components/button"
import { useState } from "react"

export default () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleReset = () => {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <div>
                <p>Count</p>
                <Button color='blue' onClick={() => setCount(count - step)}>
                    -
                </Button>
                <span className="px-4">{count}</span>
                <Button color='blue' onClick={() => setCount(count + step)}>
                    +
                </Button>
            </div>
            <div>
                <p>Step</p>
                <Button color='blue' onClick={() => setStep(step - 1)}>
                    -
                </Button>
                <span className="px-4">{step}</span>
                <Button color='blue' onClick={() => setStep(step + 1)}>
                    +
                </Button>
            </div>
            <div>
                <input type="number" onChange={event => setCount(parseInt(event.target.value))} value={count} />
            </div>
            <div>
                <p>Actions</p>
                <Button color='red' onClick={handleReset}>
                    Reset
                </Button>
            </div>
        </>
    )
}