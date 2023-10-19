import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
    <div [innerHTML]="svgContent"></div>
  `
})
export class SvgIconComponent {
  @Input() src: string | undefined;
  public svgContent: string | undefined;

  ngOnInit(): void {
    if (this.src) {
      this.loadSvgContent(this.src);
    }
  }

  private loadSvgContent(url: string): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.svgContent = xhr.responseText;
      }
    };
    xhr.send();
  }
}
