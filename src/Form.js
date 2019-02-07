/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

import $ from 'jquery';
import Input from './Components/Input';
import Select from './Components/Select';
import Validation from './Components/Validation';
import Wizard from './Components/Wizard';
import Upload from './Components/Upload';
import Editor from './Components/Editor';
import './Form.scss';

/**
 * Class Form
 */
export default class Form {
    constructor() {
        window.$ = window.jQuery = $;
        
        /**
         * Initiate component input
         */
        this.input = new Input();
        
        this.select = new Select();

        this.validation = new Validation();

        this.wizard = new Wizard();

        this.upload = new Upload();

        this.editor = new Editor();
    }
}