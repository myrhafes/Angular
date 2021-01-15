import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubAPIComponent } from './github-api.component';

describe('GithubAPIComponent', () => {
  let component: GithubAPIComponent;
  let fixture: ComponentFixture<GithubAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
