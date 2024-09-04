import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'callData';
  news: any[] = []; 
  filteredData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getNews();
  }

  filteredNews(category: string) {
    if (this.news && this.news.length > 0) {
      this.filteredData = this.news.filter((item: any) => item.category == category);
      console.log('Filtered Data:', this.filteredData);
    } else {
      console.log('No news data available to filter.');
    }
  }
   
  getNews() {
    this.dataService.getNews().subscribe(
      (res: any) => {
        // Ensure the response contains the 'news' object and 'articles' array
        if (res && res.news && Array.isArray(res.news)) {
          this.news = res.news;
          this.filteredData = this.news;
          console.log('News:', this.news);
        } else {
          console.log('Unexpected API response:', res);
        }
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
