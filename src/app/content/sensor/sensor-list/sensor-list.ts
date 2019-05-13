export class SensorList {
  constructor(
    public collectorNumber: string,
    public sensorNumber: string,
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
