import { createAction, props } from '@ngrx/store';

const CAR_START_UP: string = "[Car Start] Start up car start";

export const carStartup = createAction(
  CAR_START_UP,
  props<{user: string, date: number}>()
)

