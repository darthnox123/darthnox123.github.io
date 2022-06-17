import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '@app/services';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  public certificates: any[];

  constructor(private certificationsService: CertificationsService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.certificationsService.getFiles();
    this.certificates = data.map((file: any) => {return {downloadUrl: file.download_url, name: (file.name).replace('.pdf','')}});
  }

}
