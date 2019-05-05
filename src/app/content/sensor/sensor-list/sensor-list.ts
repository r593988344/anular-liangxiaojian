export class SensorList {
  constructor(
    public collectorNumber: number,
    public sensorNumber: number,
    public vibrationThreshold: number,
    public cycle: string,
    public temperature: string,
    public humidity: string,
    public longitude: number,
    public latitude: number,
    public sectionId: string,
    public creatTime: string,
    public status: string
  ) {
  }
}
