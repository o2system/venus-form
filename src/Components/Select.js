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
import 'select2';
import 'bootstrap-select';
import 'selectize';
import './Select.scss'

/**
 * Class Select
 *
 * @author          Teguh Rianto
 * @package         Components
 */
export default class Select {
    constructor() {
        /**
         * Initiate select with search
         */
        this.selectWithSearch();

        /**
         * Initiate select insertable search
         */
        this.selectInsertableSearch();

        /**
         * Initiate select dropdown
         */
        this.selectDropdown();
    }

    selectWithSearch() {
        $(".select-with-search").select2();
    }

    selectInsertableSearch() {
        $('.select-insertable-search').selectize({
            create: true,
            sortField: 'text'
        });

        $('.select-with-tags').selectize({
            delimiter: ',',
            persist: false,
            create: function (input) {
                return {
                    value: input,
                    text: input
                }
            }
        });
    }

    selectDropdown() {
        $('.select-dropdown').selectpicker();
    }
}