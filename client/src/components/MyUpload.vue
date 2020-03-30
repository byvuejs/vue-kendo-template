<template>
     <div class="container-fluid">
        <div class='row my-4'>
            <div class="col-12 col-lg-9 border-right">
                <kendo-upload ref="upload"
                            name="files"
                            :async-save-url="'http://localhost:3000/upload'"
                            :async-remove-url="'http://localhost:3000/remove'"
                            :localization-select="'Upload...'">
                </kendo-upload>
            </div>
        </div>
    </div>   
</template>


<script>
import axios from 'axios';
import Vue from 'vue';
import '@progress/kendo-ui';
import $ from 'jquery';
import { UploadInstaller } from '@progress/kendo-upload-vue-wrapper';

Vue.use(UploadInstaller);

export default {
    data(){
        return {
            files: []
        };
    },
    mounted() {
        var upload = this.$refs.upload.kendoWidget();
    
        upload._module.postFormData = function (url, data, fileEntry, xhr) {

            var module = this;
            fileEntry.data("request", xhr);

            axios.post(url, data, {
                onUploadProgress(ev) {
                    let percentCompleted = Math.round((ev.loaded * 100) / ev.total);
                    module.upload._onFileProgress({ target: $(fileEntry, module.upload.wrapper) }, percentCompleted);
                }
            })
            .then(reuslt => {
                var e = { target: { responseText: '', statusText: reuslt.statusText, status: reuslt.status } };
                module.onRequestSuccess.call(module, e, fileEntry);
            })
            .catch(error => {
                alert('오류! 다시 업로드를 진행해주세요');
            });
        };

        upload._module.paused = function(fileEntry) {
            console.log('paused');
        };

        upload._module.resume = function(fileEntry) {
            console.log('resume');
        };

        upload._module.stopUploadRequest = function(fileEntry) {
            console.log('stopUploadRequest');
            console.log(fileEntry);
        };

        upload._submitRemove = function (fileNames, eventArgs, onSuccess) {
            console.log('_submitRemove');
            onSuccess();
        };
    }
}
</script>
