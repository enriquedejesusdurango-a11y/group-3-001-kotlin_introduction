package jetbrains.kotlin.course.warmup

// You will use this function later
fun getGameRules(wordLength: Int, maxAttemptsCount: Int, secretExample: String) =
    "Welcome to the game! $newLineSymbol" +
            newLineSymbol +
            "Two people play this game: one chooses a word (a sequence of letters), " +
            "the other guesses it. In this version, the computer chooses the word: " +
            "a sequence of $wordLength letters (for example, $secretExample). " +
            "The user has several attempts to guess it (the max number is $maxAttemptsCount). " +
            "For each attempt, the number of complete matches (letter and position) " +
            "and partial matches (letter only) is reported. $newLineSymbol" +
            newLineSymbol +
            "For example, with $secretExample as the hidden word, the BCDF guess will " +
            "give 1 full match (C) and 1 partial match (B)."

fun generateSecret():String = "ABCD"

fun countPartialMatches(secret:String,guess:String):Int {
    val allMatches = countAllMatches(secret, guess)
    val exactMatches = countExactMatches(secret, guess)
    return allMatches - exactMatches
}

fun countExactMatches(secret:String,guess:String): Int{
    var matches = 0
    secret.filterIndexed {index, gss ->
        if (gss == guess[index]) {
            matches++
            true
        } else {
            false
        }}

    return matches
}

fun countAllMatches(secret:String,guess:String):Int {
    var matches = 0
    val secretChars = secret.toMutableList()

    for (guessChar in guess) {
        // Buscamos si el caracter actual de 'guess' existe en los caracteres restantes de 'secret'.
        if (secretChars.contains(guessChar)) {
            matches++
            // Removemos el caracter de 'secretChars' para no contarlo múltiples veces
            // si aparece varias veces en 'guess' pero solo una en 'secret'.
            secretChars.remove(guessChar)
        }
    }
    return matches
}

fun printRoundResults(secret:String,guess:String): Unit{
    println("Your guess has ${countExactMatches(secret, guess)} full matches and ${countPartialMatches(secret, guess)} partial matches.")

}

fun isWon(complete:Boolean, attempts:Int, maxAttemptsCount:Int): Boolean{
    return if (complete) {
        if (attempts <= maxAttemptsCount) {
            true
        }else {
            false
        }
    } else {
        false
    }

}

fun isLost(complete:Boolean, attempts:Int, maxAttemptsCount:Int): Boolean{
    return if (!complete) {
        if (attempts > maxAttemptsCount) {
            true
        }else {
            false
        }
    } else {
        false
    }

}


fun isComplete(secret:String,guess:String): Boolean {
    return if (guess == secret) {
        true
    } else {
        false
    }
}


fun playGame(secret:String,wordLength:Int,maxAttemptsCount:Int): Unit{
    var guess = ""
    var attemps = 0
    do {
        println("Please input your guess. It should be of length $wordLength.")
        guess = safeReadLine()
        printRoundResults(secret,guess)
        attemps++
        if(isWon(isComplete(secret,guess),attemps, maxAttemptsCount)){
            println("Congratulations! You guessed it!")
            break
        }else if(isLost(isComplete(secret,guess),attemps, maxAttemptsCount)){
            println("Sorry, you lost! :( My word is $secret")
            break
        }

    }while (attemps<=(maxAttemptsCount+1))

}
fun main() {
    // Write your solution here
    val wordLength = 4
    val maxAttemptsCount = 3
    val secretExample = "ACEB"
    println(getGameRules(wordLength, maxAttemptsCount, secretExample))
    playGame(generateSecret(), wordLength,maxAttemptsCount)
}
