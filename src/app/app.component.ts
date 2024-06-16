import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  features = [
    {
      title: "Advanced Technology",
      image: "../assets/feature-1.png",
      point1: "Precise Tools: Ensures a perfect fit with 3D scanning and CNC milling.",
      point2: "Fast Turnaround: Reduces wait times with rapid production.",
      point3: "High Quality: Uses cutting-edge materials for better results."
    },
    {
      title: "Expertise & Experience",
      image: "../assets/feature-2.png",
      point1: "Specialized Knowledge: Experts in various dental prosthetics fields.",
      point2: "Extensive Experience: Workers with over 10 years of expertise.",
      point3: "Continuous Education: Regularly updated through courses."
    },
    {
      title: "High-Quality Materials",
      image: "../assets/feature-3.png",
      point1: "Long-Lasting: Superior materials that ensure the most best results.",
      point2: "Aesthetic Appeal: Advanced materials provide a natural look.",
      point3: "Biocompatible: Materials are safe and tolerated by the body."
    }
  ]

  onSubmit(form: NgForm) {
    form.resetForm();
  }
}
