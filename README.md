
# 🚀 NestJS API Learning Summary

This project documents my learning journey with **NestJS**, focusing on building scalable APIs using:

- 📦 Modules
- 🧩 Controllers
- ⚙️ Services
- 🔁 Dynamic Routes
- 🛡️ Middleware
- 🔐 API key authentication via headers

---

## ✅ What I’ve Built

- Modular **NestJS app structure**
- Clean separation of **controller & service logic**
- **Middleware** for route protection using API keys
- **Dynamic routes** with both path & query parameters
- NewsAPI-style query-based route architecture
- Secure API key validation using `x-api-key` in headers

---

## 🗂️ Folder Structure

```bash
src/
├── main.ts                              # App entry point
├── app.module.ts                        # Root module
│
├── user/                                # Feature module (e.g. user)
│   ├── user.module.ts                   # Module file
│   ├── user.controller.ts              # Route definitions
│   ├── user.service.ts                 # Logic layer (business ops)
├── middlewares/
│   └── api-key.middleware.ts            # Header-based API key checker
│
└── ...other feature folders

---

## 🧠 NestJS Core Concepts

### 🧩 Modules

Modules group related code (controllers, services, schemas).
Example: `user.module.ts` ties together the user controller and service.

```ts
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

---

### 🔁 Controllers

Handle incoming HTTP requests and route them to the service logic.

```ts
@Controller('account/user')
export class UserController {
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
```

---

### ⚙️ Services

Contain the core logic and interact with the database or external systems.

```ts
@Injectable()
export class UserService {
  getUserById(id: string) {
    return {
      status: 200,
      userId: id,
      message: 'User found',
    };
  }
}
```

---

### 🛡️ Middleware (API Key Authentication)

Custom middleware that checks for a valid `x-api-key` in the request headers:

```ts
const apiKey = req.headers['x-api-key'];
if (apiKey === '1000') {
  next();
} else {
  res.status(401).json({ message: 'Invalid API key' });
}
```

Use in `main.ts`:

```ts
app.use(new ApiKeyMiddleware().use);
```

---

## 🌐 API Endpoints (RESTful + Query-based)

| Method | Endpoint                        | Description             |
| ------ | ------------------------------- | ----------------------- |
| GET    | `/api/query?user=all`           | Get all users           |
| GET    | `/api/query?search_user=saumya` | Search users by keyword |
| GET    | `/api/query?user_id=123`        | Get single user by ID   |
| POST   | `/api/user`                     | Create a new user       |
| PUT    | `/api/user/:id`                 | Update existing user    |
| DELETE | `/api/user/:id`                 | Delete user by ID       |

> 🔐 All routes require this header:
>
> ```
> x-api-key: 1000
> ```

---

## 🛠 Technologies Used

* [NestJS](https://nestjs.com/)
* TypeScript
* Node.js (Express under the hood)
* RESTful architecture
* Header-based auth

---

> Built with 💙 using NestJS for real-world backend development and scalable RESTful architecture.

```
