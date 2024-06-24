import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { ImagesService } from './images.service';
import { catchError } from 'rxjs';

describe('ImagesService', () => {
  let service: ImagesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ImagesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the url', async () => {
    service.games.subscribe((result) => {
      expect(result).toEqual(['https://unsplash.com/photos/yC-Yzbqy7PY']);
    });

    const mockRequest = httpMock.expectOne('https://picsum.photos/v2/list');
    mockRequest.flush([
      {
        id: '0',
        title: 'Space foot',
        desc: 'Nice game',
        nb_players: 2,
        jacket_path: 'https://picsum.photos/id/0/5000/3333',
      },
    ]);
  });

  describe('when the url is not reachable', () => {
    it('should throw an error', (done) => {
      service.games
      .pipe(catchError((err: any): any => {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toEqual('Missing url');
        done()
      })).subscribe();

      const mockRequest = httpMock.expectOne('https://picsum.photos/v2/list');
      mockRequest.flush('error', { status: 404, statusText: 'not found'})
    });
  });
});
