import { Component } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent {
  displayedColumns: string[] = ['inclu_dates', 'title', 'typeof_bene', 'no_bene', 'duration', 'type_serv_rendered', 'partners', 'fac_staff_involved', 'role', 'cost_funding_source'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  inclu_dates: string;
  title: string;
  typeof_bene: string;
  no_bene: number;
  duration: string;
  type_serv_rendered: string;
  partners: string;
  fac_staff_involved: string;
  role: string;
  cost_funding_source: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'iii', inclu_dates: 'Hydrogen', typeof_bene: 'Sectors/Clientele', no_bene: 0, duration: 'Feb. 20, 2023', type_serv_rendered: 'training', partners: 'OES', fac_staff_involved: 'milk', role: 'drink', cost_funding_source: 13},
  {title: 'ww', inclu_dates: 'Helium', typeof_bene: 'Sectors/Clientele', no_bene: 0, duration: 'Feb. 20, 2023', type_serv_rendered: 'training', partners: 'OES', fac_staff_involved: 'milk', role: 'drink', cost_funding_source: 12},
  {title: 'www', inclu_dates: 'Lithium', typeof_bene: 'Sectors/Clientele', no_bene: 0, duration: 'Feb. 20, 2023', type_serv_rendered: 'training', partners: 'OES', fac_staff_involved: 'milk', role: 'drink', cost_funding_source: 11},
  {title: 'ww', inclu_dates: 'Beryllium', typeof_bene: 'Sectors/Clientele', no_bene: 0, duration: 'Feb. 20, 2023', type_serv_rendered: 'training', partners: 'OES', fac_staff_involved: 'milk', role: 'drink', cost_funding_source: 14}
];


