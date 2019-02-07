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

import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/themes/inlite/theme';

import 'tinymce/skins/lightgray/skin.min.css';
import 'tinymce/skins/lightgray/content.min.css';
import 'tinymce/skins/lightgray/content.inline.min.css';
import 'tinymce/skins/lightgray/content.mobile.min.css';
import 'tinymce/skins/lightgray/skin.mobile.min.css';

import 'tinymce/plugins/advlist/plugin.js';
import 'tinymce/plugins/autolink/plugin.js';
import 'tinymce/plugins/lists/plugin.js';
import 'tinymce/plugins/link/plugin.js';
import 'tinymce/plugins/image/plugin.js';
import 'tinymce/plugins/charmap/plugin.js';
import 'tinymce/plugins/print/plugin.js';
import 'tinymce/plugins/preview/plugin.js';
import 'tinymce/plugins/anchor/plugin.js';
import 'tinymce/plugins/textcolor/plugin.js';
import 'tinymce/plugins/code/plugin.js';
import 'tinymce/plugins/visualblocks/plugin.js';
import 'tinymce/plugins/searchreplace/plugin.js';
import 'tinymce/plugins/fullscreen/plugin.js';
import 'tinymce/plugins/insertdatetime/plugin.js';
import 'tinymce/plugins/media/plugin.js';
import 'tinymce/plugins/contextmenu/plugin.js';
import 'tinymce/plugins/table/plugin.js';
import 'tinymce/plugins/paste/plugin.js';
import 'tinymce/plugins/wordcount/plugin.js';
import 'tinymce/plugins/help/plugin.js';
/**
 * Class Editor
 *
 * @author          Teguh Rianto
 * @package         Components
 */

export default class Editor {
    constructor() {
        tinymce.init({
            selector: '.tinymce',
            height: 300,
            menubar: false,
            themes: "inlite",
            statusbar: false,
            skin: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor textcolor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code help wordcount'
            ],
            toolbar: 'insert |  formatselect | bold italic blockquote alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat | code',
            setup : function(ed)
            {
                ed.on('init', function() 
                {
                    this.getDoc().body.style.fontSize = '1rem';
                    this.getDoc().body.style.fontFamily = 'Arial';
                    this.getDoc().body.style.color = '#666';
                });
            },
        });

        tinymce.init({
            selector: '.tinymce-inline',
            theme: 'inlite',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor textcolor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code help wordcount'
            ],
            insert_toolbar: 'formatselect | bullist numlist outdent indent | quickimage quicktable media codesample',
            selection_toolbar: 'formatselect | bold italic quicklink blockquote alignleft aligncenter alignright alignjustify removeformat ',
            inline: true,
            paste_data_images: true,
            skin: false,
        });
    }
}