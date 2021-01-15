export class X{
    x:string;
    constructor(x:string){
        this.x = x;
    }
    setX(value:string){
        this.x=value
    }
    getX(){
        return this.x
    }
    disp(){
        console.log("x est "+ this.x)
    }
}