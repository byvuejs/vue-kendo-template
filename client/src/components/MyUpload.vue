<template>
     <div class="container-fluid">
        <div class='row my-4'>
            <div class="col-12 col-lg-9 border-right">
                <kendo-upload ref="upload"
                            name="files"
                            :async-save-url="'http://localhost:3000/upload'"
                            :async-remove-url="'custom-remove-url'">
                </kendo-upload>
            </div>
        </div>
    </div>   
</template>


<script>
import axios from 'axios';
import Vue from 'vue';
import '@progress/kendo-ui';
import { UploadInstaller } from '@progress/kendo-upload-vue-wrapper';

Vue.use(UploadInstaller);

export default {
    data(){
        return {
            files: []
        };
    },
    mounted() {
        var postFormData = function (url, data, fileEntry, xhr) {
            var module = this;
            fileEntry.data("request", xhr);

            axios.post(url, data)
            .then(reuslt => {
                var e = { target: { responseText: '', statusText: reuslt.statusText, status: reuslt.status } };
                module.onRequestSuccess.call(module, e, fileEntry);
            })
            .catch(error => {
                alert('오류! 다시 업로드를 진행해주세요');
            });
        };
        var submitRemove = function (fileNames, eventArgs, onSuccess) {
            onSuccess();
        };
        var upload = this.$refs.upload.kendoWidget();
        upload._module.postFormData = postFormData;
        upload._submitRemove = submitRemove;
    }
}
</script>
