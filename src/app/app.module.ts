import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
// Application Components
import {AppComponent} from './app.component';
import { AppMenuComponent } from './layout/menu/component/app.menu.component';
import { AppMenuitemComponent } from './layout/menu/component/app.menuitem.component';
import { AppTopBarComponent } from './layout/topbar/app.topbar.component';
import { AppFooterComponent } from './layout/footer/app.footer.component';
import { MenuService } from './layout/menu/service/app.menu.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { RouterModule } from '@angular/router';
import { DefaultInterceptor } from './core/interceptors/default.interceptor';


// Application services


@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        RouterModule,
        RoutesModule
    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MenuService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
