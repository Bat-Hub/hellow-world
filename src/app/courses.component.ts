import { Component } from '@angular/core';
import { CoursesService } from './courses.services';

@Component({
    selector: "Courses",
    template: `
        <h2>{{ "Title: "+ gettitle() }}</h2>
        <button class="btn btn-primary" [class.Active]="isActive">Ok</button>
        <button [style.backgroundColor]="isActive? 'green' : 'purple'">Ok</button>
        <div (click)="OnDivClick()">
        <button (click)="OnSave($event)">Ok</button>
        </div>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <img [src]="Imageurl" />
        <table>
            <tr>
                <td [attr.colspan]="colspan" *ngFor="let course of courses">
                {{course}}</td>
            </tr>
        </table>
        <input [value]="email" (keyup.enter)="OnKeyup()" />
        <input [(ngModel)]="email" (keyup.enter)="OnKeyup()" /
        `
})
export class Coursecomponent{
    title = "List of Courses";
    Imageurl = "http://lorempixel.com/400/200/"
    colspan= 3; 
    isActive = true;
    email= "dsdsd@l,s";
    OnKeyup(){
            console.log(this.email);
    }
    gettitle(){
        return this.title;
    }
    OnSave($event){
        $event.stopPropagation();
        console.log("Mouse clicked", $event)
    }

    OnDivClick(){
        console.log("Div clicked")
    }

    courses;
    constructor(service: CoursesService){
        this.courses=service.getCourses();
    }
}