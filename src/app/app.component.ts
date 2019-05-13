import { Component} from '@angular/core';
// 装饰器@Component()
@Component({
  // 元数据
  // CSS选择器
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// typeScript类
export class AppComponent{
  title = 'auction';
}
