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
import 'bootstrap-tagsinput';

/**
 * Class Tags
 *
 * @author          Teguh Rianto
 * @package         Components/Input
 */
export default class Tags {
    constructor() {
        $('.tags').tagsinput();
    }
}