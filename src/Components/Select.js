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
require('multiselect');
require('jquery.quicksearch');

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

        /**
         * Initiate select multi
         */
        this.selectMulti();
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

    selectMulti() {
        $('.multiselect-search').multiSelect({
            selectableHeader: "<input type='text' class='search-input form-control mb-2' autocomplete='off' placeholder='Search...'>",
            selectionHeader: "<input type='text' class='search-input form-control mb-2' autocomplete='off' placeholder='Search...'>",
            afterInit: function(ms){
              var that = this,
                  $selectableSearch = that.$selectableUl.prev(),
                  $selectionSearch = that.$selectionUl.prev(),
                  selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)',
                  selectionSearchString = '#'+that.$container.attr('id')+' .ms-elem-selection.ms-selected';
          
              that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
              .on('keydown', function(e){
                if (e.which === 40){
                  that.$selectableUl.focus();
                  return false;
                }
              });
          
              that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
              .on('keydown', function(e){
                if (e.which == 40){
                  that.$selectionUl.focus();
                  return false;
                }
              });
            },
            afterSelect: function(){
              this.qs1.cache();
              this.qs2.cache();
            },
            afterDeselect: function(){
              this.qs1.cache();
              this.qs2.cache();
            }
        
        });
    }
}