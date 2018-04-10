import { Injectable } from '@angular/core';
import { RESOURCES } from '../data/resources';

@Injectable()
export class ResourceService {

  getResources(objectiveNumber: string) {
    return RESOURCES.filter(resource => resource.objectiveNumber === objectiveNumber);
  }
}
