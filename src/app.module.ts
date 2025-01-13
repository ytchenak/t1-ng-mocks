import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import { AppComponent } from './app/app.component';

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule.forRoot()
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { 

}