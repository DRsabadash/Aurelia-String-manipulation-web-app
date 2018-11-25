import { ModifiedString } from './modifiedString';

export class App {
    heading = "Type string to modify";
    moddedStrings: ModifiedString[] = [];
    baseString = "";

    //main function for string manipulation function calls.
    //This function is called once every key-press.
    //built for expandability.
    manipulateString() {
        if (this.baseString.length > 0) {
            this.moddedStrings = [];
            this.flipWords(this.baseString);
            this.removeVowels(this.baseString);
            this.l33tGenerator(this.baseString);
            this.igpayAtinlayEneratorgay(this.baseString);
            /*insert additional function call 'modules' here.
            //
            //
            */

        }
    }


    // flips input word order backwards, leaving each word in it's original letter order.
    flipWords(base) {
        var str = "";
        var arr = base.split(" ");

        for (var i = arr.length - 1; i >= 0; i--) {
            str = str.concat(" ", arr[i]);
        }
        this.moddedStrings.push(new ModifiedString(str));
    }

    // Counts and removes vowels from input.
    removeVowels(base) {
        const count = (base.match(/a|e|i|o|u|y|A|E|I|O|U|Y/g) || []).length;
        var str = base.replace(/a|e|i|o|u|y|A|E|I|O|U|Y/g, "_");

        this.moddedStrings.push(new ModifiedString("Number of vowels: " + count + "   " +  str));
    }


    // Leet Speak generator, swaps most alphabetical characters with similar symbols or collection of special characters.
    l33tGenerator(base) {
        var str = "";
        var arr = base.split("");

        for (var i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "a":
                case "A":
                    arr[i] = "/-\\";
                    str = str.concat("", arr[i]);
                    break;
                case "e":
                case "E":
                    arr[i] = "3";
                    str = str.concat("", arr[i]);
                    break;
                case "g":
                case "G":
                    arr[i] = "&";
                    str = str.concat("", arr[i]);
                    break;
                case "h":
                case "H":
                    arr[i] = "/-/";
                    str = str.concat("", arr[i]);
                    break;
                case "i":
                case "I":
                    arr[i] = "!";
                    str = str.concat("", arr[i]);
                    break;
                case "l":
                case "L":
                    arr[i] = "|_";
                    str = str.concat("", arr[i]);
                    break;
                case "m":
                case "M":
                    arr[i] = "/v\\";
                    str = str.concat("", arr[i]);
                    break;
                case "n":
                case "N":
                    arr[i] = "/\\/";
                    str = str.concat("", arr[i]);
                    break;
                case "o":
                case "O":
                    arr[i] = "0";
                    str = str.concat("", arr[i]);
                    break;
                case "q":
                case "Q":
                    arr[i] = "(_,)";
                    str = str.concat("", arr[i]);
                    break;
                case "r":
                case "R":
                    arr[i] = "Я";
                    str = str.concat("", arr[i]);
                    break;
                case "s":
                case "S":
                    arr[i] = "$";
                    str = str.concat("", arr[i]);
                    break;
                case "t":
                case "T":
                    arr[i] = "†";
                    str = str.concat("", arr[i]);
                    break;
                case "u":
                case "U":
                    arr[i] = "µ";
                    str = str.concat("", arr[i]);
                    break;
                case "v":
                case "V":
                    arr[i] = "\\/";
                    str = str.concat("", arr[i]);
                    break;
                case "w":
                case "W":
                    arr[i] = "\\v/";
                    str = str.concat("", arr[i]);
                    break;
                case "x":
                case "X":
                    arr[i] = "Ж";
                    str = str.concat("", arr[i]);
                    break;
                default:
                    str = str.concat("", arr[i]);
                    break;
                    
            }
        }
        this.moddedStrings.push(new ModifiedString(str));
    }

    //Pig Latin generator, swaps the first letter to the end of the word and adds 'ay'.
    igpayAtinlayEneratorgay(base) {
        var str = "";
        var temp = "";
        var subarr;
        var arr = base.split(" ");

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != " ") {
                subarr = arr[i].split("");
                if (subarr.length >= 1) {
                    for (var x = 1; x < subarr.length; x++) {
                        temp += subarr[x];
                    }
                    temp += subarr[0] + "ay";
                    str = str.concat(" ", temp);
                    temp = "";
                }
            } else {
                str = str.concat(arr[i]);
            }
        }
        this.moddedStrings.push(new ModifiedString(str));
    }

    // Declare additional function 'modules' here, and call them in manipulateString()
    //
    //
}

