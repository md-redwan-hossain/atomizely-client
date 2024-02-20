import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateToDoComponent } from "./components/create-to-do/create-to-do.component";
import { AllToDoComponent } from "./components/all-to-do/all-to-do.component";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [CreateToDoComponent, AllToDoComponent],
  imports: [CommonModule, ButtonModule],
  exports: [AllToDoComponent],
})
export class ToDoModule {}
