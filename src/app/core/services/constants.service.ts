import { InjectionToken } from '@angular/core';
import { ConstantsModel } from '../models/constants.model';

export const ConstantsServiceToken = new InjectionToken<ConstantsModel>("ConstantsService");