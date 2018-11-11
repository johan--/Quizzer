/* Vendor imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../modules/material.module';
/* App imports */
import { QuizRunnerComponent } from './quiz-runner.component';
import { QuizRunnerRoutingModule } from './quiz-runner-routing.module';
import { QuizHandler } from '../../services/quizHandler.service';
import { QuizDatabase } from '../../services/quizDatabase.service';

@NgModule({
    declarations: [
        QuizRunnerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        QuizRunnerRoutingModule,
        MaterialModule
    ],
    providers: [
        QuizHandler,
        QuizDatabase
    ]
})
export class QuizRunnerModule {};