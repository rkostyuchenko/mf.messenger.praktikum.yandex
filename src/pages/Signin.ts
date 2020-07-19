import { Component } from '../modules/component.js'
import { SigninForm } from '../components/SigninForm/SigninForm.js'

const form = new SigninForm()

export class Signin extends Component {
    constructor() {
        super({
            form
        })
    }

    render() {
        return `
            <div class="wrapper">
                <div class="modal">
                    <div class="modal__header">
                        <img class="logo logo_size_s" src="./images/logo.svg" />
                    </div>
                    <div class="modal__content">
                        <span class="form-title">Вход</span>
                        {{h form}}
                    </div>
                </div>
            </div>
        `
    }
}