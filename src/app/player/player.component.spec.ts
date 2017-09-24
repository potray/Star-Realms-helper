import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import {Player} from "../model/player";

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let element;
  const INITIAL_AUTHORITY = 50;
  const MOCK_PLAYER_NAME = 'Yarrick';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    component.player = new Player(INITIAL_AUTHORITY, MOCK_PLAYER_NAME);
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should have the player info rendered', () => {
    fixture.whenStable().then(() => {
      expect(element.querySelector('h1').innerHTML).toBe(MOCK_PLAYER_NAME);
      expect(element.querySelector('h3').innerHTML).toBe(`Authority: ${INITIAL_AUTHORITY}`);
    })
  });

  it ('Should have buttons that increment and decrement the authority', () => {
    fixture.whenStable().then(() => {
      let buttons = element.querySelectorAll('button');
      const EXPECTED_INCREMENTS = [1, 5, 10, -1, -5, -10];
      let accumulatedAuthority = component.player.authority;
      buttons.forEach((button, index) => {
        button.click();
        accumulatedAuthority += EXPECTED_INCREMENTS[index];
        expect(component.player.authority).toBe(accumulatedAuthority);
      });
    })
  })
});
