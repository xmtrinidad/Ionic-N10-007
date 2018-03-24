import { Injectable } from '@angular/core';
import { RESOURCES } from '../data/resources';

@Injectable()
export class ResourceService {

  getResources(objectiveNumber: number) {
    return RESOURCES.find(resourceArr => resourceArr[0].objectiveNumber === objectiveNumber);
  }
}
