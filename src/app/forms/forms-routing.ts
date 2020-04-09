import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { TemplateFormsComponent } from './template-driven/template.component';
import { ReactiveFormsComponent } from './reactive/reactive.component';

export const routes: Routes = [
  { path: "", component: FormsComponent,
    children: [
      { path: "", redirectTo: "template-forms", pathMatch: "full" },
      { path: "template-forms", component: TemplateFormsComponent },
      { path: "reactive-forms", component: ReactiveFormsComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class FormsComponentRoutingModule {}
