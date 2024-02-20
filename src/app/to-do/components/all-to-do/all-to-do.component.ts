import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: "app-all-to-do",
  templateUrl: "./all-to-do.component.html",
  styleUrl: "./all-to-do.component.scss",
})
export class AllToDoComponent {
  constructor(private readonly http: HttpClient) {}
  postData: Array<PostData> = [];

  handleLoadData() {
    this.http.get<any>("https://jsonplaceholder.typicode.com/posts").subscribe({
      next: (result: PostData[]) => (this.postData = result),
      error: (err: Error) => console.error(`${err.name}: ${err.message}`),
    });
  }
}
