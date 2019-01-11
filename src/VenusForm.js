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
require('./js/form-advanced');
require('./js/form-validation');
require('./js/form-timepicker');
require('./js/form-datepicker');
require('./js/form-daterangepicker');
require('./js/form-mask');
require('./js/form-wizard');
require('./js/form-editor');
require('./js/form-upload');
/**
 * Class Venus
 */
class VenusForm {
    constructor() {
        window.$ = window.jQuery = $;
    }
}

export default VenusForm;