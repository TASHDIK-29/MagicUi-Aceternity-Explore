"use client"

import React from 'react';
import { useState } from 'react';
import { useTheme } from 'next-themes';


const ThemeSwitcher = () => {

    const [theme, setTheme] = useState("dark");
    return (
        <div className='flex gap-6'>
           The current theme is : {theme}
           <button className='border p-1 mx-4' onClick={() => setTheme("light")}>Light Mode</button> 
           <button className='border p-1 mx-4' onClick={() => setTheme("dark")}>Dark Mode</button> 
        </div>
    );
};

export default ThemeSwitcher;