import { Raleway, Noto_Serif_Display, Playfair_Display_SC, Crimson_Text } from "next/font/google";

export const raleway = Raleway({ subsets: ["latin"] });
export const noto = Noto_Serif_Display({ weight: ["100", "200","300","400","500","600","700","800","900",], subsets:["cyrillic"]})
export const playfair = Playfair_Display_SC({ subsets: ["latin"], weight: ["400", "700", "900"], style:["normal"]})
export const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"]})