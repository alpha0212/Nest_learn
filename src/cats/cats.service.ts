/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []; //cats의 타입을 빈 배열로 처리

  create(cat: Cat) {
    this.cats.push(cat); //cats의 배열에 cat 파라미터를 추가해줌
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
