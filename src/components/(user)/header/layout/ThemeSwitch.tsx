"use client"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="  // Replace with your loading image path
      width={36}
      height={36}
      sizes="28x28"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  );

  const handleChange = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={handleChange} checked={resolvedTheme === 'light'} />
      <span className="slider"></span>
      <style jsx>{`
        /* The switch - the box around the slider */
        .switch {
          font-size: 17px;
          position: relative;
          display: inline-block;
          width: 3.5em;
          height: 2em;
        }
        
        /* Hide default HTML checkbox */
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        /* The slider */
        .slider {
          --background: #0f2c67;
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--background);
          transition: .5s;
          border-radius: 30px;
        }
        
        .slider:before {
          position: absolute;
          content: "";
          height: 1.4em;
          width: 1.4em;
          border-radius: 50%;
          left: 10%;
          bottom: 15%;
          box-shadow: inset 8px -4px 0px 0px #FD841F;
          background: var(--background);
          transition: .5s;
        }
        
        input:checked + .slider {
          background-color: #0f2c67;
        }
        
        input:checked + .slider:before {
          transform: translateX(100%);
          box-shadow: inset 15px -4px 0px 15px #FD841F;
        }
      `}</style>
    </label>
  );
}
