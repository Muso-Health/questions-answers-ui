import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaFormComponent } from '../../widgets/qa-form/qa-form.component';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCardImage} from '@angular/material/card';
@Component({
  selector: 'app-main',
  imports: [CommonModule, QaFormComponent, MatTabGroup, MatTab, MatCardImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
