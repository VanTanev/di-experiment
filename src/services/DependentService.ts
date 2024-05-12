import TestService from './TestService.js'

export default class DependentService {
  testService: TestService

  constructor(testService: TestService) {
    this.testService = testService
  }

  getInnerData(): string {
    return this.testService.getData()
  }
}
