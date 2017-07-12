import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'initial'})

export class InitialPipe implements PipeTransform {
    transform(val : string, args : string) : any {
        return 'Mr ' + val;
    }
}