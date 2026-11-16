//import {useState} from 'react';

import React, { useState, useRef, useEffect } from "react";
import "./SubsystemC.css";
//import React, { Component } from "react";


export default function SubsystemC() {
        const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };      
     

      
   
        const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };
       const startTimer = (e) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer("00:00:10");

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };
    function setter() {
       // setTimer("00:00:10");
       clearTimer(getDeadTime());
    };

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    };

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    };

    const [Randnum,setRandnum]=useState(0);
  
      // εδω περα φτιαχνω τους τυχαιους αριθμους μου 
    const GiveNum = () => {
        setRandnum(randomNumberInRange(1, 10));
       
        

        
    };
    setInterval(GiveNum,40000)
    setInterval(useEffect,5000)
    
    return (

            //γενικοτερα για ολες τις τιμες , θα χρειαστούμε καποιου ειδους γεννητρια αριθμων , αλλα επειδη αυτό είναι δυσκολο και βαριεμαι , θα χρησιμοποιησω την 
            //για να παιξω με τις τιμες επειτα και να μην ειναι ομοιομορφες θα πολλαπλασιιασω με ενα γελιο νουμερο και μετα θα κανω mod
        <div>
        <h2>Το Τρίτο υποσύστημα</h2>
        <h3 className="blink"
                    style={{ color: "red" }}>
                  !!!  Κινδυνος ανεμοθυελλας !!!
                </h3>
        <h3 className="blink"
                    style={{ color: "green" }}>
                  !!!  Κινδυνος ΥΨΗΛΗΣ ακτινοβολιας !!!
                </h3>
        <p>Είναι υπεύθηνο για την υποστήριξη ζωής(life support) καθώς και το περιβάλλον κατοικησης ( habitation)</p>
        <p>H ατμοσφαιρικη πίεση αυτή την στιγμή είναι {(Randnum > 5) ? Randnum/2 : Randnum}</p>
        <p>Η  εσωτερικη θερμοκρασια του θερμοκηπιου αυτή την στιγμή είναι {Randnum*5}</p>
        <p>Η  σταθμη του νερου  αυτή την στιγμή είναι {Randnum*10}</p>
        <p>Διαθεσιμο αποθεμα οξυγονου {Randnum*100}</p>
        <p>Αρδευση σε {timer}</p>
        <p>Η  εξωτερικη θερμοκρασια αυτή την στιγμή είναι {Randnum*2}</p>
        <p>Η εξωτερικη ατμοσαιρα είναι {0.006+Randnum/100} </p>
        <p>Οι ενεργειακες απαιτησεις είναι {Randnum*2} κιλοτζαουλ</p>
         
            <button onClick={onClickReset}>Reset</button>
        </div>


    );
    }

