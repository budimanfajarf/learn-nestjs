import { Module } from '@nestjs/common';

@Module({})
export class BookmarkModule {
  constructor() {
    console.log('Bookmark module');
  }
}
