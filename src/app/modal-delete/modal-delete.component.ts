import { Component, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() displayEvent = new EventEmitter<boolean>();

  showDeleteModal() {
    this.displayEvent.emit(false)
  }
}
