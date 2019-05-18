export class SensorList {
  constructor(
    public collectorNumber: string,
    public sensorNumber: string,
    public vibrationThreshold: number,
    public longitude: number,
    public latitude: number,
    public sectionId: string,
    public creatTime: string,
    public status: string
  ) {
  }
}
