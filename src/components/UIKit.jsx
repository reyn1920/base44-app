/* eslint-disable react/prop-types */
import React from "react";
function cn(...a){return a.flatMap(x=>Array.isArray(x)?x:[x]).filter(Boolean).join(" ");}
const BUTTON_BASE="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
const BUTTON_VARIANTS={default:"bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90",secondary:"bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-90",outline:"border border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]/50",ghost:"bg-transparent hover:bg-[hsl(var(--muted))]/60 text-[hsl(var(--foreground))]",destructive:"bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:opacity-90"};
const BUTTON_SIZES={sm:"h-9 px-3 text-sm",md:"h-10 px-4 text-sm",lg:"h-11 px-6 text-base"};
export function Button({as:As="button",variant="default",size="md",className,...props}){return <As className={cn(BUTTON_BASE,BUTTON_VARIANTS[variant],BUTTON_SIZES[size],className)} {...props}/>;}
export const Card=({className,...p})=><div className={cn("rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-sm",className)} {...p}/>;
export const CardHeader=({className,...p})=><div className={cn("p-6 pb-2",className)} {...p}/>;
export const CardTitle=({className,...p})=><h3 className={cn("text-lg font-semibold",className)} {...p}/>;
export const CardDescription=({className,...p})=><p className={cn("text-sm text-[hsl(var(--muted-foreground))]",className)} {...p}/>;
export const CardContent=({className,...p})=><div className={cn("p-6 pt-0",className)} {...p}/>;
export const CardFooter=({className,...p})=><div className={cn("p-6 pt-0 flex items-center gap-2",className)} {...p}/>;
export function UIKitDemo(){return(<div className="space-y-6 p-6"><h2 className="text-xl font-semibold">UI Kit Demo</h2><div className="flex flex-wrap gap-2"><Button>Default</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Destructive</Button></div></div>);}
