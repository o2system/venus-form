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
import 'dropify/dist/js/dropify';

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
            Dropzone.autoDiscover = false;

            // Cards version
            if($('#dropzone-cards').length) {
                let dropzoneCards = $('#dropzone-cards');
                let dropzoneCardsActionUrl = dropzoneCards.data('action-url');

                let dropzoneCardsFilePreview = dropzoneCards.find('#dropzone-cards-template');
                dropzoneCardsFilePreview.removeAttr('id');

                let dropzoneCardsFilePreviewTemplate = dropzoneCardsFilePreview.parentNode.innerHTML;
                dropzoneCardsFilePreviewTemplate.parentNode.removeChild(dropzoneCardsFilePreview);

                let dropzoneCards = $('#dropzone-cards-form').dropzone({
                    url: dropzoneCardsActionUrl,
                    autoProcessQueue: true,
                    thumbnailWidth: null,
                    thumbnailHeight: null,
                    previewTemplate: dropzoneCardsFilePreviewTemplate
                });

                dropzoneCards.on("addedfile", function (file) {
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

                dropzoneCards.on("success", function (file, resp) {
                    file.previewElement.querySelector(".media-list-item").classList.remove('uploading');
                    file.previewElement.querySelector(".upload-progress").style.display = 'none';
                    file.previewElement.querySelector(".media-item-file-extension").innerHTML = file.type;
                });

                dropzoneCards.on("error", function (file) {
                    file.previewElement.querySelector(".media-list-item").classList.remove('uploading');
                    file.previewElement.querySelector(".upload-progress").style.display = 'none';
                    file.previewElement.querySelector(".media-item-file-extension").innerHTML = file.type;
                });
            }

            // Table version
            if($('#dropzone-table').length) {
                let dropzoneTable = $('#dropzone-table');
                let dropzoneTableActionUrl = dropzoneTable.data('action-url');

                let dropzoneTableFilePreview = dropzoneTable.find('#dropzone-table-template');
                dropzoneTableFilePreview.removeAttr('id');

                let dropzoneTableFilePreviewTemplate = dropzoneTableFilePreview.parentNode.innerHTML;
                dropzoneTableFilePreviewTemplate.parentNode.removeChild(dropzoneTableFilePreview);

                let dropzoneTable = $('#dropzone-table-form').dropzone({
                    url: dropzoneTableActionUrl,
                    autoProcessQueue: false,
                    thumbnailWidth: null,
                    thumbnailHeight: null,
                    previewTemplate: dropzoneTableFilePreviewTemplate, // Define the container to display the previews
                    previewsContainer: '#dropzone-table',
                    clickable: "#dropzone-add-file", // Define the element that should be used as click trigger to select files.
                });

                dropzoneTable.on("addedfile", function (file) {

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
                    // Hookup the start button
                    file.previewElement.querySelector(".start").onclick = function() { fileDropzone.enqueueFile(file); };
                });

                dropzoneTable.on("totaluploadprogress", function(progress) {
                    document.querySelector("#dropzone-table-total-progress .progress-bar").style.width = progress + "%";
                });

                dropzoneTable.on("sending", function(file) {
                    // Show the total progress bar when upload starts
                    document.querySelector("#dropzone-table-total-progress").style.opacity = "1";
                    // And disable the start button
                    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
                });

                dropzoneTable.on("success", function (file, resp) {
                    file.previewElement.querySelector(".upload-progress").style.display = 'none';
                    file.previewElement.querySelector(".media-item-file-extension").innerHTML = file.type;
                });

                dropzoneTable.on("error", function (file) {
                    file.previewElement.querySelector(".upload-progress").style.display = 'none';
                    file.previewElement.querySelector(".media-item-file-extension").innerHTML = file.type;
                });

                fileDropzone.on("queuecomplete", function(progress) {
                    document.querySelector("#dropzone-table-total-progress").style.opacity = "0";
                });

                // Setup the buttons for all transfers
                // The "add files" button doesn't need to be setup because the config
                // `clickable` has already been specified.
                document.querySelector("#dropzone-table-actions .start").onclick = function() {
                    dropzoneTable.enqueueFiles(fileDropzone.getFilesWithStatus(Dropzone.ADDED));
                };

                document.querySelector("#dropzone-table-actions .cancel").onclick = function() {
                    dropzoneTable.removeAllFiles(true);
                };
            }
        }
    }

    initDropify(){
        $('.dropify').dropify();
    }
}