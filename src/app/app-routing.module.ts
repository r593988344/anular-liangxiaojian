import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Code404Component} from './code404/code404.component';
import {HomeComponent} from './home/home.component';
import {MenuListComponent} from './content/system/menu-list/menu-list.component';
import {RoleListComponent} from './content/system/role-list/role-list.component';
import {UserListComponent} from './content/system/user-list/user-list.component';
import {MessageHistoryComponent} from './content/message/message-history/message-history.component';
import {MessageTemplateComponent} from './content/message/message-template/message-template.component';
import {SensorListComponent} from './content/sensor/sensor-list/sensor-list.component';
import {SensorMapComponent} from './content/sensor/sensor-map/sensor-map.component';
import {PoliceStatisticsComponent} from './content/statement/police-statistics/police-statistics.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'system/menuList',
    component: MenuListComponent
  },
  {
    path: 'system/roleList',
    component: RoleListComponent
  },
  {
    path: 'system/userList',
    component: UserListComponent
  },
  {
    path: 'message/messageHistory',
    component: MessageHistoryComponent
  },
  {
    path: 'message/messageTemplate',
    component: MessageTemplateComponent
  },
  {
    path: 'sensor/sensorList',
    component: SensorListComponent
  },
  {
    path: 'sensor/sensorMap',
    component: SensorMapComponent
  },
  {
    path: 'statement/policeStatistics',
    component: PoliceStatisticsComponent
  },
  {
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
