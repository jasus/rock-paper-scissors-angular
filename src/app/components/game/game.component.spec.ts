import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { GameComponent } from './game.component';
import { HomeComponent } from '../home/home.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

import { RockPaperScissorsService } from '../../services/rock-paper-scissors.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFontAwesomeModule,
        AngularMaterialModule,
        AppRoutingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        GameComponent,
        HomeComponent
      ],
      providers: [RockPaperScissorsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`isRemote should be true if url include 'remote'`, () => {
    const fixture = TestBed.createComponent(GameComponent);
    const gameComponent = fixture.debugElement.componentInstance;

    if (gameComponent.router.url.includes('remote')){
      expect(gameComponent.isRemote).toBeTruthy();
    } else {
      expect(gameComponent.isRemote).toBeFalsy();
    }
    
  });

});
