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
import Date from './Components/Input/Date';
import Time from './Components/Input/Time';
import Select from './Components/Select';

/**
 * Class Venus
 */
class VenusForm {
    constructor() {
        window.$ = window.jQuery = $;
        
        /**
         * Initiate input object
         */
        this.input = new Object();

        this.input.date = new Date();
        this.input.time = new Time();

        this.select = new Select();
    }
}

export default VenusForm;