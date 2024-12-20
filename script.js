import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatsliste

  //Läuft Zeichen für Zeichen über den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()
    // Hänge das aktuelle Zeichen doppelt an
    result.push(upperCaseLetter)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1 // zählt alle "e"
    } else if (currentElement === "E") {
      count++ // Kurzform von count=count + 1
    }
  }

  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  //Wir filtern die eingabe so, dass nur noch Buchstaben und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      //Grossbuchstaben
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      //Kleinbuchstaben
      result.push(currentElement)
    } else if (ascii === 32) {
      //Lerrzeichen
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch Filtern
  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // Hier sind 2 Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  //Jetzt können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // Da es ein Wort mehr wie Leerzeichen gibt, geben wir Leerzeichen+1 zurück
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) // überprüfe ob mindestens eine Großbuchstabe vorhanden ist.
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false //sagt das es keine Sonderzeichen gibt, um später zu testen, ob es doch Sonderzeichen gibt
  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true // Wenn ein Sonderzeichen gefunden wird, wird hasSonderzeichen auf true gesetzt
    }
  }
  return hasSonderzeichen //Sagt ob Sonderzeichen vorhanden sind
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)
export function aufgabe07(args) {
  const input = args
  const result = []
  //Sollte das Wort 'und' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      if (input[i + 1] === "n") {
        if (input[i + 2] === "d") {
          return true //gibt true zurück, wenn das Wort erhalten ist
        }
      }
    }
  }
  return false // gibt false zuück wenn das Wort nicht erhalten ist
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)
export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
      result.push(3) // 3 ersetzt "e"
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args //speichert den Wert von args in der Variable input, damit wird für uns klarer, was wir gerade bearbeiten.
  const result = []

  let is6long = false // zählt ob der Text 6 Zeichen lang ist oder nicht
  let count = 0 // lässt den Anfang bei 0 starten

  for (let i = 0; i < input.length; i++) {
    // "i" ersetzt 0. Dann wird die Kurzform angewendet.
    const currentElement = input[i]
    count = count + 1
  }

  if (count === 6) {
    is6long = true // bestimmt ob die Zeichenanzahl dieser Anzahl entspricht
  }
  return is6long
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  // erstelle eine Variable um den ASCII-Code zu speichern
  let asciiCode = null
  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0)
  // sollte "null" zurückgeben wenn mehr wenn mehr wie ein Zeichen gegeben sind
  if (input.length > 1) {
    return null

    // sollte "null" zurückgeben wenn keine Eingabe gegeben ist
  } else if (input.length === 0) {
    return null
  }

  //Gib den ASCII-Code zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um die Position des ersten e's zu speichern
  let firstEPosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Suche die Position des ersten e's
    if (currentElement === "e") {
      return i //er springt aus der Funktone raus, wenn e gefunden wird bricht es ab und es wird nicht mehr ausgeführt.
    }
  }
  return -1 // -1 zeigt an,dass es nicht in der Liste steht
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let lastIndex = -1

  // suche die position des letzten e's
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      lastIndex = i
    }
  }

  return lastIndex
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0

  //suche die position des dritten e's
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
    }
    if (count === 3) {
      return i
    }
  }

  return -1 //return -1 if there are less than 3 e's
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  // Lesen Sie die Eingabe nur bis zum ersten Leerzeichen ein.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)
export function aufgabe16(args) {
  const input = args
  const result = []
  //Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Resr als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)
export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn wir auf ein Leerzeichen treffen, dann schreiben wir alles was wir bis jetzt haben, in die totalList
    if (currentElement === ",") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }
  // Wir schreiben alles was wir noch bis zum Ende gelesen haben, in die Liste
  totalList.push(currentList.join(""))

  return totalList
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)
export function aufgabe18(args) {
  const input = args

  // Wir können die Aufgabe 17 verwenden um eine Liste zu bekommen.
  const nameAndAge = aufgabe17(input)

  //Wir generieren unsere Ausgabenliste
  const result = []

  // Hier schreiben wir ganze Worte in die Liste, auch das ist möglich
  result.push("Sie heissen ")

  // Wir setzten die Liste dann sop zusammen, dass der Name und das Alter an der richtigen Stelle eingefügt werden.
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  // Wie immer geben wir das Resultat als Text zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //sollte 'aa' heissen.
    if (currentElement === "aa") {
      result.push("aa")
    }
  }
  // jedes Zeichen sollte verdoppelt werden
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  let allGood = true

  //prüfe ob nach jeden "." ein Leerschlag kommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      //prüfe ob das nächste Zeichen ein Leerschlag ist.
      if (input[i + 1] === " ") {
        //do nothing
      } else {
        allGood = false
      }
    }
  }
  return allGood
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  // kehre die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  // sollte testen on die Eingabe eine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  // sollte testen on die Eingabe eine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  return !isNaN(input)
} // Das "isNaN" ist eine Variable, die überprüft ob "Input" eine Zahl ist. Das bedeutet wenn "Input" eine Zahl ist, wird mit "true" geantwortet. Sie steht für "is Not a Number". Wenn "Input" keine Zahl ist, wird mit "false" geantwortet. Dazu ist das Ausrufezeichen dafür da, um die Antwort wie umzukehren. Das bedeutet, wenn kein Ausrufezeichen da wäre, würde es bei einer Zahl mit "false" antworten. anders gesagt, ist es ein Negationszeiche, welches den Wahrheitswert einer Bedingung umkehrt.
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result = []
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe29(arg) {
  const input = arg
  let count = 0
  // suche die position des dritten i's
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "i") {
      count++
    }
    if (count === 3) {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")

  return result
}
linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function Selectionsort(args) {
  const input = args.split("")
  const result = []
  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // wenn die jetzige position stimmt verschiebt es das kleinste Element nicht.

    let min_idx = i

    // durchläuft den unsortierten Teil um das kleinste Elemt zu finden.
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Update min_idx wenn ein Element kleiner ist
        min_idx = j
      }
    }

    // Verschiebt das kleinste Element zur korrekten Position
    let temp = input[i]
    input[i] = input[min_idx]
    input[min_idx] = temp
  }
  return input
}

linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)
