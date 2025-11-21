import { Job } from '../decorator/job.decorator';
import { AbstractJob } from './abstract.job';

@Job({
  name: 'Fibonacci',
  description: 'Generate a fibonacci sequence and store it in the DB.',
})
export class FibonacciJob extends AbstractJob {}
