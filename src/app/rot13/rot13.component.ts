import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rot13',
  templateUrl: './rot13.component.html',
  styleUrls: ['./rot13.component.css']
})
export class Rot13Component implements OnInit {

  valueEnter = '';
  valueAnswer = 'votre texte chiffré ou déchiffré';

  constructor() { }



  ngOnInit(): void {
  }

  validate(): void {
    let i = 0;
    this.valueAnswer = '';
    const a = 'a';
    const A = 'A';
    const z = 'z';
    const Z = 'Z';

    for (i = 0; i < this.valueEnter.length; i++) {
      let codeNumber = this.valueEnter.charCodeAt(i);
      if (codeNumber >= a.charCodeAt(0) && codeNumber <= z.charCodeAt(0)) {
        codeNumber += 13;
        if (codeNumber > z.charCodeAt(0)) {
          codeNumber -= 26;
        }
      } else if (codeNumber >= A.charCodeAt(0) && codeNumber <= Z.charCodeAt(0)) {
        codeNumber += 13;
        if (codeNumber > Z.charCodeAt(0)) {
          codeNumber -= 26;
        }
      }
      const resp = String.fromCharCode(codeNumber);
      this.valueAnswer += resp;
    }
  }


}
