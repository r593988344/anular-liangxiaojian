import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { StarsComponent } from './stars/stars.component';
import { Code404Component } from './code404/code404.component';
import { SystemComponent } from './content/system/system.component';
import { MessageComponent } from './content/message/message.component';
import { SensorComponent } from './content/sensor/sensor.component';
import { StatementComponent } from './content/statement/statement.component';
import { MenuListComponent } from './content/system/menu-list/menu-list.component';
import { UserListComponent } from './content/system/user-list/user-list.component';
import { RoleListComponent } from './content/system/role-list/role-list.component';
import { MessageHistoryComponent } from './content/message/message-history/message-history.component';
import { SignatureListComponent } from './content/message/signature-list/signature-list.component';
import { MessageTemplateComponent } from './content/message/message-template/message-template.component';
import { SensorMapComponent } from './content/sensor/sensor-map/sensor-map.component';
import { SensorListComponent } from './content/sensor/sensor-list/sensor-list.component';
import { SectionListComponent } from './content/sensor/section-list/section-list.component';
import { PoliceStatisticsComponent } from './content/statement/police-statistics/police-statistics.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    ContentComponent,
    StarsComponent,
    Code404Component,
    SystemComponent,
    MessageComponent,
    SensorComponent,
    StatementComponent,
    MenuListComponent,
    UserListComponent,
    RoleListComponent,
    MessageHistoryComponent,
    SignatureListComponent,
    MessageTemplateComponent,
    SensorMapComponent,
    SensorListComponent,
    SectionListComponent,
    PoliceStatisticsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
