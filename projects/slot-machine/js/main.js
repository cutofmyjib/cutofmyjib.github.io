document.addEventListener("DOMContentLoaded",function(){

  const lever = document.getElementById("lever")
  lever.addEventListener("click", play)
  let statusBar = document.getElementById("status")

  let reel = [[],[],[]]

  init();


  function init() {
    let reelIndex = 1

    for (let i = 0; i < 3; i++) {
      let row = ["a", "b", "c"]

      for (let j = 0; j < 3; j+=1) {
        reel[i].push(document.getElementById("reel-" + reelIndex + row[j]))
        // reel[i].push(document.getElementById("reel-" + reelIndex + row[j]).getAttribute("value-reel-" + reelIndex + row[j]))
        // document.getElementById("reel-" + reelIndex + row[j]).innerHTML = reel[i][j]
      }
      reelIndex += 1
    }
  }


  function play() {

    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 9) + 1
      reel[i] = randomRotate(reel[i], random)

      for (let j = 0; j < 3; j+=1) {
        const reelParent = document.querySelector(`.reel-${i+1}`)
        let reelChild = reel[i][j]
        reelParent.appendChild(reel[i][j])
        // document.getElementById("reel-" + reelIndex + row[j]).setAttribute("value-reel-" + reelIndex + row[j], reel[i][j])
        // document.getElementById("reel-" + reelIndex + row[j]).innerHTML = reel[i][j]
        // document.getElementById("reel-" + (i+1) + row[j]).classList.add('spinning')
      }
    }

    let reelDataAttrs = getDataAttrs(reel)
    let statusObj = isWinner([reelDataAttrs[0][1], reelDataAttrs[1][1], reelDataAttrs[2][1]])
    let clearStatus = function() {
      statusBar.innerHTML = ""
    }

    let timeoutId = setTimeout(clearStatus, 500)
    if (statusObj.winner) {
      clearTimeout(timeoutId)
      displayStatus(statusObj)
    } else {
      displayStatus(statusObj)
    }

    // const statusDiv = document.getElementById("status")
    // statusDiv.addEventListener("transitionend", removeTransition)

  }

  function getDataAttrs(matrix) {
    let dataAttrs = [[],[],[]]
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j+=1) {
        dataAttrs[i].push(matrix[i][j].getAttribute("value-reel"))
      }
    }
    return dataAttrs
  }

  function randomRotate(array, times) {
    while (times--) {
      let temp = array.shift()
      array.push(temp)
    }
    return array
  }

  function isWinner(array) {
    let stringArr = array.toString();
    switch (stringArr) {
      case "C,C,C":
        return { winner: true, reward: 'cup of coffee' }
      case "T,T,T":
        return { winner: true, reward: 'cup of tea' }
      case "E,E,E":
        return { winner: true, reward: 'cup of espresso' }
      default:
        return { winner: false, reward: '' }
    }
  }

  function displayStatus(status) {
    statusBar.innerHTML = status.winner ?
      `You won a ${status.reward}!`:
      "Sorry, try again!!";
  }

  function removeTransition() {
    console.log(this)
    this.transition = "none"
  }

  // function clearStatus() {
  //   statusBar.innerHTML = ''
  // }

});