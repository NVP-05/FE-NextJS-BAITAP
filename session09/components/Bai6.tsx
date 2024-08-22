"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function Bai6({ className, ...props }: SliderProps) {
  const [value, setValue] = useState(60);

  return (
    <>
      <Slider
        defaultValue={[60]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        onValueChange={(newValue: any) => setValue(newValue)}
        {...props}
      />
      Value: {value}
    </>
  );
}
