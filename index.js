

    function shout(string){
        return string.toUpperCase();

    }

    function whisper(string){
        return string.toLowerCase();
    }

    function logShout(string){
      const UpperString = string.toUpperCase();
      console.log(UpperString);      
    }

    function logWhisper(string){
        const LowerString = string.toLowerCase();
        console.log(LowerString);
    }

    function sayHiToHeadphonedRoommate(string){
        if(string == string.toLowerCase()){
            return "I can\'t hear you!"
        } else if (string == string.toUpperCase()){
            return "YES INDEED!"
        } else if (string === "Let's have dinner together!"){
            return "I would love to!"
        }
        return null
    }

    console.log(sayHiToHeadphonedRoommate("HELLO"))
