import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KeyCheckerMiddleWare } from 'src/KeyChecker.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new KeyCheckerMiddleWare().use)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

/*
Ok let's restructure our routes to match with the news API. lets use 
http:localhost:3000/api/querry?user=all&apikey=1000 : for all users
http:localhost:3000/api/querry?search_user=<search>&apikey=1000 : for all searching
http:localhost:3000/api/querry?user_id=<id>&apikey=1000 : for all getting one user

tell me is this method ok or does it need improvements?
*/