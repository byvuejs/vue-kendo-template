<template>
    <div class="container-fluid">
        <div class='row my-4'>
            <div class="col-12 col-lg-9 border-right">
                <h3>DropDownList</h3>
                <dropdownlist 
                        :data-items='datasourceArray' 
                        :default-value="'Basketball'" >
                </dropdownlist>
                
                <br />
                <br />
                
                <h3>Multiselect {{ multiselectValue }}</h3>
                <kendo-multiselect v-model="multiselectValue"
                        :data-source="multiselectArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :placeholder="'Select size...'"
                        :filter="'contains'">
                </kendo-multiselect>

                <br />
                <br />

                <h3>Autocomplete {{ autocompleteValue }}</h3>
                <kendo-autocomplete v-model="autocompleteValue"
                        :data-source="autocompleteArray"
                        :placeholder="'Select country...'"
                        :separator="', '"
                        :filter="'contains'">
                </kendo-autocomplete>

                <br />
                <br />

                <h3>Combobox {{ comboboxValue }}</h3>
                <kendo-combobox v-model="comboboxValue"
                    :placeholder="'Select sport...'"
                    :data-source="comboboxArray"
                    :data-text-field="'text'"
                    :data-value-field="'value'"
                    :filter="'contains'">
                </kendo-combobox>

                <br />
                <br />

                <h3>Dropdownlist {{ dropdownlistValue }}</h3>
                <kendo-dropdownlist v-model="dropdownlistValue"
                        :data-source="dropdownlistArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :filter="'contains'">
                </kendo-dropdownlist>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { DropdownsInstaller }from '@progress/kendo-dropdowns-vue-wrapper';

Vue.component('dropdownlist', DropDownList);
Vue.use(DropdownsInstaller);

export default {
    data() {
        return {
            datasourceArray: ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ],
            multiselectValue: "",
            multiselectArray: [
                { text: 'Baseball', value: '1' },
                { text: 'Basketball', value: '2' },
                { text: 'Cricket', value: '3' },
                { text: 'Football', value: '4' },
                { text: 'Tennis', value: '5' },
                { text: 'Volleyball', value: '6' }
            ],
            autocompleteValue: "",
            autocompleteArray: [
                'Albania',
                'Andorra',
                'Armenia',
                'Austria',
                'Azerbaijan',
                'Belarus',
                'Belgium',
                'Bosnia & Herzegovina',
                'Bulgaria',
                'Croatia',
                'Cyprus',
                'Czech Republic',
                'Denmark',
                'Estonia',
                'Finland',
                'France',
                'Georgia',
                'Germany',
                'Greece',
                'Hungary',
                'Iceland',
                'Ireland',
                'Italy',
                'Kosovo',
                'Latvia',
                'Liechtenstein',
                'Lithuania',
                'Luxembourg',
                'Macedonia',
                'Malta',
                'Moldova',
                'Monaco',
                'Montenegro',
                'Netherlands',
                'Norway',
                'Poland',
                'Portugal',
                'Romania',
                'Russia',
                'San Marino',
                'Serbia',
                'Slovakia',
                'Slovenia',
                'Spain',
                'Sweden',
                'Switzerland',
                'Turkey',
                'Ukraine',
                'United Kingdom',
                'Vatican City'
            ],
            comboboxValue: "",
            comboboxArray: [
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ],
            dropdownlistValue: "",
            dropdownlistArray: [
                { text: 'Small', value: '1' },
                { text: 'Medium', value: '2' },
                { text: 'Large', value: '3' },
                { text: 'X-Large', value: '4' },
                { text: '2X-Large', value: '5' }
            ]
        };
    },
    methods: {
        onChange: function(e) {
            console.log("Event :: change");
        },
        onClose: function(e) {
            console.log("Event :: close");
        },
        onDataBound: function(e) {
            console.log("Event :: dataBound");
        },
        onFiltering: function(e) {
            console.log("Event :: filtering");
        },
        onOpen: function(e) {
            console.log("Event :: open");
        },
        onSelect: function(e) {
            console.log("Event :: select");
        },
        onDeselect: function(e) {
            console.log("Event :: deselect")
        }
    }
}
</script>
