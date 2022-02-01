export class CounterService {
  aciveToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToIncative() {
    this.aciveToInactiveCounter++;
    console.log('Active to Inactive ' + this.aciveToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active ' + this.inactiveToActiveCounter);
  }
}
