import { Modal } from './modal.js'
import { AlertError} from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

/*variaveis*/

const form = document.querySelector('form')
const weightInput = document.querySelector('#weightInput')
const heightInput = document.querySelector('#heightInput')

weightInput.oninput = () => { AlertError.close()}
heightInput.oninput = () => { AlertError.close()}

form.onsubmit = event =>{
    event.preventDefault()

    const height = heightInput.value
    const weight = weightInput.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    
    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return; //para a aplicação
    }

    AlertError.close()

    const result = calculateIMC(weight, height)

    displayResultMessage(result)

}

function displayResultMessage(result){
    Modal.message.innerText = result

    Modal.open()
}