export class  Msuscriptor{
    constructor({ nombre, plan } ){
        this.nombre= nombre
        this.plan= plan
        
    }
    set nombre(n){
        this._nombre= +n
    }

    get nombre(){
        return this._nombre
    }

    set plan(p){
        this._plan= +p
    }

    get plan(){
        return this._plan
    }

    
    precioB(){
        if(this.plan=== 1)
        return 3
        else if(this.plan=== 2)
        return 5
        else
        return 10
    }
    Adicional(){
        if(this.plan=== 1)
        return this.precioB()* 0.1
        else if(this.plan=== 2)
        return this.precioB()* 0.1
        else
        return 0
    }

    precioPsus(){
        return this.precioB() + this.Adicional()
    }
}
