import Left from "./Left";
import Right from "./Right";

export default function HeroComp({selectedImage , onImageChange}: any){
    return (
        <div className="flex flex-col lg:flex-row justify-around">
            <Left selectedImage={selectedImage} onImageChange={onImageChange}/>
            <Right />
        </div>
    );
}