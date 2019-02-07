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
import * as Dropzone from 'dropzone';
import 'dropify/dist/js/dropify'
/**
 * Class Upload
 *
 * @author          Teguh Rianto
 * @package         Components
 */

export default class Upload {
    constructor() {
        /**
         * Init dropzone
         */
        this.initDropzone();

        /**
         * Init dropify
         */
        this.initDropify();
    }

    initDropzone() {
        if (typeof Dropzone != 'undefined') {
            var urlAction = $('[name="dropzone-url"]').val();

            var previewNode = $('#dropzone-preview');
            previewNode.removeAttr('id');
            var previewTemplate = previewNode.parent().html();
            previewNode.parent().remove();

            var mediaDropzone = $(".dropzone-form").dropzone({
                url: urlAction,
                autoProcessQueue: true,
                thumbnailWidth: null,
                thumbnailHeight: null,
                previewTemplate: previewTemplate, // Define the container to display the previews
                //clickable: ".fileinput-button", // Define the element that should be used as click trigger to select files.
             });

            mediaDropzone.on("addedfile", function (file) {
                var fileId = 'media' + document.querySelectorAll('.media-list-item').length;
                file.previewElement.getElementsByTagName('input')[0].setAttribute('id', fileId);
                file.previewElement.getElementsByTagName('label')[0].setAttribute('for', fileId);

                var imagesFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
                if (imagesFileTypes.indexOf(file.type) != -1) {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'none';
                } else if (file.type === 'application/pdf') {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'block';
                    file.previewElement.querySelector('.media-item-icon').innerHTML = '<i class="fas fa-file-pdf"></i>';
                } else if (file.type === 'application/doc' | 'application/docx') {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'block';
                    file.previewElement.querySelector('.media-item-icon').innerHTML = '<i class="fas fa-file-word"></i>';
                } else if (file.type === 'application/ppt' | 'application/pptx') {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'block';
                    file.previewElement.querySelector('.media-item-icon').innerHTML = '<i class="fas fa-file-powerpoint"></i>';
                } else if (file.type === 'video/mp4' | 'video/webm' | 'video/mkv') {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'block';
                    file.previewElement.querySelector('.media-item-icon').innerHTML = '<i class="fas fa-file-video"></i>';
                } else if (file.type === 'audio/mpeg') {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'block';
                    file.previewElement.querySelector('.media-item-icon').innerHTML = '<i class="fas fa-file-audio"></i>';
                } else {
                    file.previewElement.querySelector('.media-item-file-details').style.display = 'block';
                    file.previewElement.querySelector('.media-item-icon').innerHTML = '<i class="fas fa-file"></i>';
                }
            });

            mediaDropzone.on("success", function (file, resp) {
                file.previewElement.querySelector(".media-list-item").classList.remove('uploading');
                file.previewElement.querySelector(".upload-progress").style.display = 'none';
                file.previewElement.querySelector(".media-item-file-extension").innerHTML = file.type;
            });

            mediaDropzone.on("error", function (file) {
                file.previewElement.querySelector(".media-list-item").classList.remove('uploading');
                file.previewElement.querySelector(".upload-progress").style.display = 'none';
                file.previewElement.querySelector(".media-item-file-extension").innerHTML = file.type;
            });
        }
    }

    initDropify(){
        $('.dropify').dropify();
    }
}