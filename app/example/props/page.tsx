"use client";
import { useState } from "react";
import { late } from "zod/v3";
export default function PropsPage() {
    return (
        <div>
            <SomeComponent/>
        </div>
    );
}
function SomeComponent(){
    const [count, setCount]= useState(0);
    // const label = "Parent Title";
    const label = 0;
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count -1);
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <ChildComponent count={count} onDecrement={decrement} label={label}/>
        </div>
    )
}
//{..props}: {..props type}
function ChildComponent (
    {count, onDecrement, label}:
    {
        count: number,
        onDecrement: () => void,
        label: number
    }
){
    return (
        <div>
            Child Using: {count}
            <button onClick={onDecrement}>Decrement</button>
            <GrandChildComponent count={count} label={label}/>
        </div>
    )
}

//props type can interface
interface GrandChildProps{
    count: number;
    label: number;
}
function GrandChildComponent({count, label}: GrandChildProps){
    return (
        <div>
            GrandChild Using: {count}
            <p>{label}</p>
        </div>
    )
}