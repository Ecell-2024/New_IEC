import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn2(...inputs) {
    return twMerge(clsx(inputs));
}

export default cn2;
