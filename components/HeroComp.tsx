import Left from "./Left";
import Right from "./Right";

export default function HeroComp(){
    return (
        <div className="flex flex-col md:flex-row">
            <Left />
            <Right />
        </div>
    );
}