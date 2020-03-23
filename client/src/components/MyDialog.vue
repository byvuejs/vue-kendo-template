<template>
    <div class="container-fluid">
            <div class='row my-4'>
                <div class="col-12 col-lg-9 border-right">
                    <span v-if="!visibleDialog">
                        <button class="k-button" @click="toggleDialog">Open Dialog</button>
                    </span>
                    <k-dialog v-if="visibleDialog" :title="'Please confirm'" @close="toggleDialog">
                        <p :style="{ margin: '25px', textAlign: 'center' }">Are you sure you want to continue?</p>
                        <dialog-actions-bar>
                            <button class="k-button" @click='toggleDialog'>No</button>
                            <button class="k-button" @click='toggleDialog'>Yes</button>
                        </dialog-actions-bar>
                    </k-dialog>
                </div>
          </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';

Vue.component('k-dialog', Dialog);
Vue.component('dialog-actions-bar', DialogActionsBar);

export default {
    data() {
        return {
            visibleDialog: false
        };
    },
    methods: {
      toggleDialog() {
          this.visibleDialog = !this.visibleDialog;
      }
    }
}
</script>
