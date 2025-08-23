import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {OrderService} from "../../shared/services/order.service";
import {CustomValidators} from "../../shared/custom-validators";
import {OrderType} from "../../../types/order.type";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit, OnDestroy {
  private product: string = '';
  orderError: boolean = false;
  showForm: boolean = true;
  btnDisabled = false;

  private orderCrate$: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private orderService: OrderService) {
  }

  firstNameValue: string = ''

  orderInputs = this.fb.group({
    firstName: [this.firstNameValue, {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    lastName: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    userPhone: ['', {
      validators: [Validators.required, CustomValidators.phoneLength],
      updateOn: 'blur'
    }],
    country: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    index: ['', {
      validators: [Validators.required, CustomValidators.inputLength],
      updateOn: 'blur'
    }],
    address: ['', {
      validators: [Validators.required],
      updateOn: 'blur'
    }],
    product: [''],
    comment: [''],
  })

  get firstName() {
    return this.orderInputs.get('firstName');
  }

  get lastName() {
    return this.orderInputs.get('lastName');
  }

  get userPhone() {
    return this.orderInputs.get('userPhone');
  }

  get country() {
    return this.orderInputs.get('country');
  }

  get index() {
    return this.orderInputs.get('index');
  }

  get address() {
    return this.orderInputs.get('address');
  }

  get comment() {
    return this.orderInputs.get('comment');
  }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      if (param['product']) this.product = param['product']
      this.orderInputs.patchValue({product: param['product']})
    })
  }

  ngOnDestroy() {
    this.orderCrate$?.unsubscribe();
  }

  onlyLetters(event: KeyboardEvent): void {
    if (event.key && !event.key.match(/[A-Za-zА-Яа-я]/)) {
      if (event.key !== 'Backspace') event.preventDefault();
    }
  }

  indexValidator(event: KeyboardEvent, indexEl: HTMLInputElement): void {
    if (event.key && !event.key.match(/\d/) || indexEl.value.length > 5) {
      if (event.key !== 'Backspace' ) event.preventDefault();
    }
  }

  phoneValidator(event: KeyboardEvent, el: HTMLInputElement) {
    const value = el.value.replace('+', '')
    if (((event.key && !event.key.match(/[+\d]/)) || value.length > 10) || event.key === '+' && value.length > 0) {
      if (event.key !== 'Backspace') event.preventDefault();
    }
  }

  addressValidator(event: KeyboardEvent) {
    if (event.key && !event.key.match(/^[A-Za-zА-Яа-я\d\/\-\s]+$/)) {
      event.preventDefault();
    }
  }

  formValidators() {
    if (this.firstName && this.lastName && this.userPhone && this.country && this.index && this.product && this.address
    && !this.firstName.invalid && !this.lastName.invalid && !this.userPhone.invalid && !this.country.invalid && !this.index.invalid && !this.address.invalid) {
       this.createOrder();
    } else {
      if (!this.firstName!.value) this.firstName!.markAsTouched();
      if (!this.lastName!.value) this.lastName!.markAsTouched();
      if (!this.userPhone!.value) this.userPhone!.markAsTouched();
      if (!this.country!.value) this.country!.markAsTouched();
      if (!this.index!.value) this.index!.markAsTouched();
      if (!this.address!.value) this.address!.markAsTouched();
    }
  }

  createOrder() {
    let body: OrderType = {
      name: this.firstName!.value as string,
      last_name: this.lastName?.value as string,
      phone: this.userPhone?.value as string,
      country: this.country?.value as string,
      zip: this.index?.value as string,
      product: this.orderInputs.get('product')?.value as string,
      address: this.address?.value as string,
    };

    if (this.comment && this.comment!.value) {
      body['comment'] = this.comment!.value as string;
    }
    this.btnDisabled = true;
    this.orderCrate$ = this.orderService.order(body)
      .subscribe({
        next: (data) => {
          this.btnDisabled = false;
          if (data.success === 1 && !data.message) {
            this.orderError = false;
            this.showForm = false;
          } else {
            setTimeout(() => {
              this.orderError = false;
            }, 3000)
            this.orderError = true;
            this.showForm = true;
          }
        },
        error: (err) => {
          this.btnDisabled = false;
          this.orderError = true;
        }
      })
  }


}
