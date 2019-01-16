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
import 'bootstrap-timepicker';
import './Time.scss';

/**
 * Class Time
 *
 * @author          Teguh Rianto
 * @package         Components/Input
 */
export default class Time {
    constructor() {
        // Time Picker
        $('.timepicker').timepicker({
            defaultTIme: false,
            icons: {
                up: 'fas fa-chevron-up',
                down: 'fas fa-chevron-down'
            }
        });
        $('.timepicker-24').timepicker({
            showMeridian: false,
            icons: {
                up: 'fas fa-chevron-up',
                down: 'fas fa-chevron-down'
            }
        });
        $('.timepicker-step').timepicker({
            minuteStep: 15,
            icons: {
                up: 'fas fa-chevron-up',
                down: 'fas fa-chevron-down'
            }
        });
    }
}