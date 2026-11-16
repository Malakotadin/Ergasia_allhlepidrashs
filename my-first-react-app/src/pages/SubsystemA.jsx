import {useState} from 'react';
export default function SubsystemA() {
        const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };      
    const [Randnum,setRandnum]=useState(0);
      // εδω περα φτιαχνω τους τυχαιους αριθμους μου 
    const GiveNum = () => {
        setRandnum(randomNumberInRange(1, 10));
    };
    setInterval(GiveNum,4000)
    
    return (

            //γενικοτερα για ολες τις τιμες , θα χρειαστούμε καποιου ειδους γεννητρια αριθμων , αλλα επειδη αυτό είναι δυσκολο και βαριεμαι , θα χρησιμοποιησω την 
            //για να παιξω με τις τιμες επειτα και να μην ειναι ομοιομορφες θα πολλαπλασιιασω με ενα γελιο νουμερο και μετα θα κανω mod
        <div>
        <h2>Το πρώτο υποσύστημα</h2>
        <p>Είναι υπεύθηνο για την υποστήριξη ζωής(life support) καθώς και το περιβάλλον κατοικησης ( habitation)</p>
        <p>H ατμοσφαιρικη πίεση αυτή την στιγμή είναι {(Randnum > 5) ? Randnum/2 : Randnum}</p>
        <p>Η  εσωτερικη θερμοκρασια αυτή την στιγμή είναι {Randnum*10}</p>
        <p>Διαθεσιμο αποθεμα οξυγονου {Randnum*100}</p>
        <p>Η  εξωτερικη θερμοκρασια αυτή την στιγμή είναι {Randnum*2}</p>
        <p>Η εξωτερικη ατμοσαιρα είναι {0.006+Randnum/100} </p>
        <p>Οι ενεργειακες απαιτησεις είναι {Randnum*2} κιλοτζαουλ</p>
        <p>οι θερμικες απωλειες είναι Q̇ = U A Tεντ − Tεκτ  άρα είναι {0.2*500*(Randnum*10-Randnum*2)}</p>
        </div>


    );
    }
