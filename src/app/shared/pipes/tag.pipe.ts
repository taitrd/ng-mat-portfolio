import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: string|string[], args: {prefix?: string, separator?: string} = {}): any {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value) && value.length > 0) {
      const separator = args.separator ? args.separator : ' ';
      const prefix = args.prefix ? args.prefix : '#';
      return value.map(i => `${prefix}${i}`).join(separator);
    }
    return null;
  }

}
