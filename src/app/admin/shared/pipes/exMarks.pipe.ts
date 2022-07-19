import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: 'exMarks'
})
export class exMarksPipe implements PipeTransform {
	transform(str: string) {
		return `${str.trim()}!`
	}
}