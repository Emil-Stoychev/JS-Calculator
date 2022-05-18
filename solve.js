function solve() {

    // Current and previous operations

    let currentOperand = document.querySelector('.currentOperand')
    let previousOperand = document.querySelector('.previousOperand')

    // all operations
    let clearAllBtn = document.querySelector('#clearAll')
    let finishBtn = document.querySelector('#finish')

    let deleteBtn = document.querySelector('.delete')
    let divideBtn = document.querySelector('.divide')
    let multiplicationBtn = document.querySelector('.multiplication')
    let plusBtn = document.querySelector('.plus')
    let subtractBtn = document.querySelector('.subtract')
    let pointBtn = document.querySelector('.point')

    let digits = Array.from(document.querySelectorAll('.digit'))

    // Set clearBtn
    clearAllBtn.addEventListener('click', (e) => {
        currentOperand.textContent = null
        previousOperand.textContent = null

        plusBtn.disabled = false
        subtractBtn.disabled = false
        multiplicationBtn.disabled = false
        divideBtn.disabled = false
        pointBtn.disabled = false
    })

    // Set digits event listener
    digits.forEach(x => x.addEventListener('click', (e) => {

        if (currentOperand.textContent == 0 && !currentOperand.textContent.includes('.')) {
            currentOperand.textContent = e.currentTarget.textContent
        } else {
            currentOperand.textContent += e.currentTarget.textContent
        }
    }))

    // Finish Btn
    finishBtn.addEventListener('click', (e) => {

        if (previousOperand.textContent != '' && currentOperand.textContent != '') {
            let all = []

            all.push(Number(parseFloat(previousOperand.textContent)))
            all.push(Number(parseFloat(currentOperand.textContent)))

            if (previousOperand.textContent.includes('*')) {
                currentOperand.textContent = all[0] * all[1]
            }
            if (previousOperand.textContent.includes('÷')) {
                currentOperand.textContent = all[0] / all[1]
            }
            if (previousOperand.textContent.includes('+')) {
                currentOperand.textContent = all[0] + all[1]
            }
            if (previousOperand.textContent.includes('-')) {
                currentOperand.textContent = all[0] - all[1]
            }
            previousOperand.textContent = null

            pointBtn.disabled = false
            multiplicationBtn.disabled = false
            divideBtn.disabled = false
            plusBtn.disabled = false
            subtractBtn.disabled = false
        }
    })

    // Set plus sum
    plusBtn.addEventListener('click', (e) => {

        if (currentOperand.textContent != '') {
            currentOperand.textContent += e.currentTarget.textContent
            previousOperand.textContent = currentOperand.textContent
            currentOperand.textContent = null

            multiplicationBtn.disabled = true
            divideBtn.disabled = true
            plusBtn.disabled = true
            subtractBtn.disabled = true
            pointBtn.disabled = false
        }
    })

    // Set subtract sum
    subtractBtn.addEventListener('click', (e) => {

        if (currentOperand.textContent != '') {
            currentOperand.textContent += e.currentTarget.textContent
            previousOperand.textContent = currentOperand.textContent
            currentOperand.textContent = null

            multiplicationBtn.disabled = true
            divideBtn.disabled = true
            plusBtn.disabled = true
            subtractBtn.disabled = true
            pointBtn.disabled = false
        }
    })

    // Set multiplication sum
    multiplicationBtn.addEventListener('click', (e) => {

        if (currentOperand.textContent != '') {
            currentOperand.textContent += e.currentTarget.textContent
            previousOperand.textContent = currentOperand.textContent
            currentOperand.textContent = null

            multiplicationBtn.disabled = true
            divideBtn.disabled = true
            plusBtn.disabled = true
            subtractBtn.disabled = true
            pointBtn.disabled = false
        }
    })

    // Set divide sum
    divideBtn.addEventListener('click', (e) => {

        if (currentOperand.textContent != '') {
            currentOperand.textContent += e.currentTarget.textContent
            previousOperand.textContent = currentOperand.textContent
            currentOperand.textContent = null

            multiplicationBtn.disabled = true
            divideBtn.disabled = true
            plusBtn.disabled = true
            subtractBtn.disabled = true
            pointBtn.disabled = false
        }
    })

    // delete btn 
    deleteBtn.addEventListener('click', (e) => {

        if (currentOperand.textContent != '') {
            let deleteArr = Array.from(currentOperand.textContent)
            if (deleteArr.pop() == '.') {
                pointBtn.disabled = false
            }

            currentOperand.textContent = deleteArr.join('')
        }
    })

    // // Point btn
    pointBtn.addEventListener('click', (e) => {

        if (currentOperand.textContent != '') {
            if (!currentOperand.textContent.includes('.')) {
                currentOperand.textContent += '.'

                pointBtn.disabled = true
            }
        }
    })
}