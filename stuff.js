window.onload = function() {
    const dovere = [
        "Io [?] mangiare! (dovere/müssen)",
        "Voi [?] lavorare! (dovere/müssen)",
        "Lei/Lui [?] venire a casa mia? (dovere/müssen)",
        "Tu [?] studiare! (dovere/müssen)",
        "Loro non [?] essere a casa? (dovere/müssen)",
        "Noi [?] dormire! (dovere/müssen)"
    ]
    
    const potere = [
        "Io [?] uscire? (potere/können/dürfen)",
        "Tu [?] nuotare! (potere/können/dürfen)",
        "Lei/Lui non [?] bere alcolici! (potere/können/dürfen)",
        "Noi [?] ballare! (potere/können/dürfen)",
        "Voi [?] giocare a videogiochi? (potere/können/dürfen)",
        "Loro [?] lavarti? (potere/können/dürfen)"
    ]
    
    const sapere = [
        "Io [?] tutto. (sapere/wissen/können)",
        "Tu [?] cucinare? (sapere/wissen/können)",
        "Lei/Lui [?] saltare in alto! (sapere/wissen/können)",
        "Noi non [?] programmare. (sapere/wissen/können)",
        "Voi [?] come vestirti bene! (sapere/wissen/können)",
        "Loro [?] come pulire la loro stanza. (sapere/wissen/können)"
    ]
    
    const volere = [
        "Io [?] soldi! (volere/wollen)",
        "Tu [?] una casa. (volere/wollen)",
        "Lei/Lui [?] studiare. (volere/wollen)",
        "Noi [?] meno compiti! (volere/wollen)",
        "Voi [?] qualcosa da bere? (volere/wollen)",
        "Loro non [?] uscire con me? (volere/wollen)"
    ]
    
    const dovere_answers = [
        "devo",
        "dovete",
        "deve",
        "devi",
        "devono",
        "dobbiamo"
    ]
    
    const potere_answers = [
        "posso",
        "puoi",
        "puo",
        "possiamo",
        "potete",
        "possono"
    ]
    
    const sapere_answers = [
        "so",
        "sai",
        "sa",
        "sappiamo",
        "sapete",
        "sanno"
    ]
    
    const volere_answers = [
        "voglio",
        "vuoi",
        "vuole",
        "vogliamo",
        "volete",
        "vogliono"
    ]

    const canvas = document.getElementById("confetti")

    const jsConfetti = new JSConfetti()
    
    alert("WEBSEITE WURDE VON MARTIN GEMACHT!!!")
    
    // FUNCTION(s)
    
    let newestAnswer = ""
    
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    
    function getQuestion(table, number) {
        return table[number]
    }

    function getAnswer(answerTable, number) {
        return answerTable[number]
    }
    
    function setQuestion(question) {
        if(question != null) {
            const _question = document.getElementById("question")
             _question.innerHTML = String(question)
        }
    }
    
    function generateQuestion() {
        document.getElementById("answer").value = ""

        let randomNumber = getRandomNumber(4)
    
        let randomNumber2 = getRandomNumber(6)
    
        if(randomNumber == 3) {
            let question = getQuestion(volere, randomNumber2)
            let answer = getAnswer(volere_answers, randomNumber2)
            newestAnswer = answer
            setQuestion(question)
        }  else if(randomNumber == 2) {
            let question = getQuestion(potere, randomNumber2)
            let answer = getAnswer(potere_answers, randomNumber2)
            newestAnswer = answer
            setQuestion(question)
        } else if(randomNumber == 1) {
            let question = getQuestion(sapere, randomNumber2)
            let answer = getAnswer(sapere_answers, randomNumber2)
            newestAnswer = answer
            setQuestion(question)
        } else if(randomNumber == 0) {
            let question = getQuestion(dovere, randomNumber2)
            let answer = getAnswer(dovere_answers, randomNumber2)
            newestAnswer = answer
            setQuestion(question)
        }
    }

    function onPress() {
        let hehe = String(document.getElementById("answer").value).toLowerCase()

        

        if(hehe == newestAnswer) {
            jsConfetti.addConfetti()
            
            generateQuestion()
        } else {
            alert("falsch, "+newestAnswer)
            generateQuestion()
        }
    }

    document.getElementById("submit").addEventListener("click", function() {
        onPress()
    })

    generateQuestion()
    
}
