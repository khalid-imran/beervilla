import {Component, OnInit} from '@angular/core';
import {BeerService} from '../api-service/beer.service';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  beerData = [];

  // each single product detail
  single: any = null;

  // slider variable
  showAni = 0;
  showAniRevers = 0;
  sliderPic = 1;
  disablePrevBtn = 0;
  disableNextBtn = 0;


  constructor(protected beerService: BeerService) {
    this.getProduct();
  }

  /**
   * product get from api
   */
  getProduct(): void {
    this.beerService.apiGetBeer('v2').subscribe(res => {
      this.beerData = res;
    });
  }

  /**
   * open product Modal
   */
  openModal(singleProduct): void {
    this.single = singleProduct;
    $('#productModal').modal('show');
  }

  /**
   * next pic active for slider
   */
  next(): void {
    this.disableNextBtn = 1;
    if (this.sliderPic === 1){
      this.showAni = 1;
    }
    if (this.sliderPic === 2){
      this.showAni = 2;
    }
    if (this.sliderPic === 3){
      this.showAni = 3;
    }
    if (this.sliderPic === 3) {
      setTimeout(() => {
        this.sliderPic = 1;
        this.showAni = 0;
        this.disableNextBtn = 0;
      }, 1000);
    } else {
      setTimeout(() => {
        this.sliderPic ++;
        this.showAni = 0;
        this.disableNextBtn = 0;
      }, 1000);
    }
  }

  /**
   * previous pic active for slider
   */
  prev(): void {
    this.disablePrevBtn = 1;
    if (this.sliderPic === 1){
      this.showAniRevers = 1;
    }
    if (this.sliderPic === 2){
      this.showAniRevers = 2;
    }
    if (this.sliderPic === 3){
      this.showAniRevers = 3;
    }
    if (this.sliderPic === 1) {
      setTimeout(() => {
        this.sliderPic = 3;
        this.showAniRevers = 0;
        this.disablePrevBtn = 0;
      }, 1000);
    } else {
      setTimeout(() => {
        this.sliderPic --;
        this.showAniRevers = 0;
        this.disablePrevBtn = 0;
      }, 1000);
    }
  }

  ngOnInit(): void {
    // init owl Carousel
    const owlGallery = $('#review-gallery');
    owlGallery.owlCarousel({
      items: 1,
      autoplay: 3000,
      loop: true,
      speed: 2000
    });
    // landing owl Carousel for responsive screen
    const gallery = $('#gallery');
    gallery.owlCarousel({
      items: 1,
      autoplay: 3000,
      loop: true,
      speed: 2000
    });
  }

}
