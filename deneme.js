class Nokta {

    constructor(a, b){
        this.a=a;
        this.b=b;

    }
    
}

class Ucgen{

  constructor(nok1,nok2,nok3){
    this.nok1=nok1;
    this.nok2= nok2;
    this.nok3=nok3;


}
const kenar=function (kenar1,kenar2,kenar3) {
    

const kenar1= Math.sqrt((Math.pow(2,(a2-a1))+(Math.pow(2,(b2-b1)))));
const kenar2 = Math.sqrt((Math.pow(2,(a3-a1))+(Math.pow(2,(b3-b1)))));
const kenar3 = Math.sqrt((Math.pow(2,(a3-a2))+(Math.pow(2,(b3-b2)))));

}
     cevreHesap (){
        
        return cevre=kenar1+kenar2+kenar3;
        }

         alanHesap(){
            alan=(1/2)*((a1*b2+a2*b3+a3*b1) - (b1*a2+b2*a3+b3*a1));
            return alan;
        }
    
    }



    
    
   

   


  
    

const nokta1 = new Nokta(3 , 4);
const nokta2 = new Nokta(10, 6);
const nokta3 = new Nokta(15 , 9);
const a1 = nokta1.a;
const b1 = nokta1.b;
const a2 = nokta2.a;
const b2 = nokta2.b;
const a3 = nokta3.a;
const b3 = nokta3.b;

const yasin= new Ucgen(nokta1, nokta2, nokta3);

console.log("Üçgenin Çevresi = "  + yasin.cevre);
console.log("Üçgenin Alanı = "  + yasin.alan);  
















