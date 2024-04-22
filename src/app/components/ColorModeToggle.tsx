"use client";

import React from "react";
import {useTheme} from "next-themes";
import {Button} from "@radix-ui/themes";

const ColorModeToggle = () => {
  const {setTheme, theme} = useTheme()

  return (
    <>
      <Button onClick={()=>setTheme(theme === 'light'?'dark':'light')}>
        Toggle {theme === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
};

export default ColorModeToggle;
