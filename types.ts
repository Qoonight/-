export enum AppState {
  CHAOS = 'CHAOS',
  FORMING = 'FORMING',
  FORMED = 'FORMED'
}

export interface Coordinates {
  x: number;
  y: number;
  z: number;
}

export interface ParticleData {
  chaosPos: [number, number, number];
  targetPos: [number, number, number];
  color: [number, number, number];
  size: number;
}