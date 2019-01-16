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
import 'parsleyjs';
import './Validation.scss';
/**
 * Class Validation
 *
 * @author          Teguh Rianto
 * @package         Components
 */

export default class Validation {
    constructor() {
        $('.form-validation').parsley();
    }
}