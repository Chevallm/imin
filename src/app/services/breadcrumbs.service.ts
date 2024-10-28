import { Injectable } from '@angular/core';

export type Breadcrumb = {label: string, link: string[]}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  private _breadcrumbs: Breadcrumb[] = [];

  constructor() { }

  getPath() {
    return this._breadcrumbs;
  }

  addPath(path: Breadcrumb) {
    this._breadcrumbs.push(path);
  }

  setPath(path: Breadcrumb[]) {
    this._breadcrumbs = path;
  }

}
