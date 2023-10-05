import {InitialSection} from "@/components/sections/initial";
import {AboutUsSection} from "@/components/sections/about_us/AboutUsSection";

export function Sections() {
    return (
        <div className="w-full">
            <InitialSection id="initial_section"/>
            <AboutUsSection id="about_us_section"/>
        </div>
    )
}