import { TranslateModule } from '@ngx-translate/core';
import { AppModule } from './../app.module';
import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach( () => MockBuilder(AppComponent, AppModule));

  it('should create the app', () => {
    MockRender(AppComponent);
    console.log(document.body.innerHTML);
    
  });

});
