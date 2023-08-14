import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  langs: string[]=[];

  constructor(private translate:TranslateService){
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es','en']);
    this.langs = this.translate.getLangs();
  }

  changeLangs(lang: string){
    this.translate.use(lang);
  }

}
