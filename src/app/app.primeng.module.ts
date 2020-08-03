import { NgModule } from '@angular/core';

import { SliderModule } from 'primeng';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        PanelModule,
        TableModule,
        MessagesModule,
        MultiSelectModule,
        DropdownModule,
        SliderModule,
        SelectButtonModule,
        ListboxModule,
        CalendarModule
    ],
    exports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        PanelModule,
        TableModule,
        MessagesModule,
        MultiSelectModule,
        DropdownModule,
        SliderModule,
        SelectButtonModule,
        ListboxModule,
        CalendarModule
    ]
})
export class AppPrimeNgModule {
}
