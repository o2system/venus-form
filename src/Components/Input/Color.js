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

import * as $ from 'jquery';
import 'bootstrap-colorpicker';
import 'bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css';

/**
 * Class Color
 * 
 * @author          Teguh Rianto
 * @package         Components/Input
 */
export default class Color {
    constructor() {
        /**
         * Initiate basic Color picker
         */
        $('.color-picker').colorpicker({
            format: 'hex'
        });
    }
}