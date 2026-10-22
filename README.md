# Furniture Ecommerce UI

Furniture Ecommerce UI là giao diện cửa hàng nội thất xây dựng bằng Next.js 16, TailwindCSS và TypeScript. Dự án tích hợp giao diện Mobel, các trang sản phẩm, giỏ hàng và thanh toán; đồng thời có khu vực blog với API và dữ liệu Viblo lưu bằng Prisma và SQLite.

## 🎨 Giao diện

Dự án hiện tại sử dụng giao diện từ **Mobel Furniture Website Template**, đã được tích hợp vào Next.js App Router với các tính năng:

- **Theme**: Mobel Furniture Template (Bootstrap-based)
- **Dark Mode**: Đã tích hợp dark mode với style tùy chỉnh cho Mobel theme
- **Responsive**: Giao diện mobile-first từ template gốc
- **Pages**: Homepage, Products, Blog, Contact, About, Login, Checkout, 404

### Các trang đã tích hợp:
- `/` - Homepage với slider hero, product categories, featured products
- `/products` - Danh sách sản phẩm
- `/products/[id]` - Chi tiết sản phẩm
- `/blog` - Danh sách bài viết blog
- `/blog/[slug]` - Chi tiết bài viết blog
- `/contact` - Form liên hệ
- `/about` - Giới thiệu về dự án
- `/login` - Đăng nhập
- `/checkout` - Thanh toán (multi-step: Cart → Delivery → Payment → Receipt)
- `/404` - Trang lỗi 404

### Components:
- `Header` - Navigation với dropdown menu
- `Footer` - Footer với links và newsletter
- `ProductCard` - Card hiển thị sản phẩm
- `BlogCard` - Card hiển thị bài viết blog
- `HeroSlider` - Slider hero animation

**Lưu ý**: Dữ liệu hiện tại là mock data với TODO comments để kết nối với API thật từ Prisma services.

## 📦 Tech Stack

- **Framework**: Next.js 16
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Motion
- **Database**: SQLite (Prisma ORM)
- **State Management**: Zustand
- **Language**: TypeScript

## 📋 Yêu cầu hệ thống

- Node.js 16+ hoặc 18+
- npm hoặc yarn
- Docker (tùy chọn, nếu chạy bằng Docker)

## 🚀 Hướng dẫn khởi chạy dự án

### Cách 1: Chạy trực tiếp trên máy local

1.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```

2.  **Cấu hình biến môi trường:**
    Tạo file `.env` từ `.env.example` (nếu có) và cấu hình các thông số cần thiết (ví dụ: `DATABASE_URL`).

3.  **Thiết lập cơ sở dữ liệu:**
    Dự án sử dụng SQLite. Chạy lệnh sau để đẩy schema vào database và tạo file `dev.db`:
    ```bash
    npx prisma db push
    ```

4.  **Nạp dữ liệu mẫu (Seed):**
    ```bash
    npm run seed
    ```

5.  **Khởi chạy môi trường phát triển:**
    ```bash
    npm run dev
    ```
    Mở trình duyệt tại địa chỉ [http://localhost:3000](http://localhost:3000).

### Cách 2: Chạy bằng Docker

Dự án hỗ trợ tách biệt giữa môi trường phát triển (Development) và sản xuất (Production).

#### 🛠️ Môi trường Phát triển (Development)
Sử dụng cho lập trình viên, hỗ trợ hot-reload và tối ưu cho Windows.
```bash
# Khởi chạy (tự động build nếu cần)
docker-compose -f docker-compose.dev.yml up -d

# Xem logs
docker logs -f furniture-ecommerce-frontend-dev

# Khởi chạy lại và ép build lại (khi sửa Dockerfile hoặc package.json)
docker-compose -f docker-compose.dev.yml up -d --build

# Dừng containers
docker-compose -f docker-compose.dev.yml down
```

#### 🏗️ Môi trường Sản xuất (Production)
Sử dụng bản build standalone cực nhẹ, tối ưu hiệu năng.
```bash
# Build image sản xuất
docker-compose -f docker-compose.prod.yml build

# Khởi chạy
docker-compose -f docker-compose.prod.yml up -d

# Dừng containers
docker-compose -f docker-compose.prod.yml down
```

#### 💡 Các lệnh Docker hữu ích khác
- `docker ps`: Liệt kê các container đang chạy.
- `docker system prune -a`: Dọn dẹp các images/containers/volumes không sử dụng (Cẩn thận!).
- `docker exec -it <container_name> sh`: Truy cập vào terminal bên trong container.

---

## 📂 Cấu trúc thư mục chương trình

Dưới đây là mô tả chức năng của các thư mục chính trong dự án:

-   **`prisma/`**: Chứa định nghĩa schema database (`schema.prisma`) và các script nạp dữ liệu mẫu (`seed.ts`).
-   **`public/`**: Chứa các file tĩnh như hình ảnh, biểu tượng (fonts, images, v.v.).
-   **`src/app/`**: Thư mục chính của Next.js App Router. Chứa các trang (pages), layout, API routes và server actions.
-   **`src/data/`**: Lưu trữ các file dữ liệu tĩnh hoặc hằng số sử dụng trong dự án.
-   **`src/hooks/`**: Chứa các custom React hooks để tái sử dụng logic ở frontend.
-   **`src/lib/`**: Chứa các cấu hình thư viện và hàm tiện ích (utils, Prisma client instance).
-   **`src/providers/`**: Chứa các React Context Providers (ví dụ: ThemeProvider, ReactQueryProvider).
-   **`src/repositories/`**: Lớp truy cập dữ liệu (Data Access Layer), thực hiện các truy vấn database qua Prisma.
-   **`src/services/`**: Chứa logic nghiệp vụ xử lý dữ liệu, bao gồm cả các module crawler dữ liệu từ bên ngoài.
-   **`src/store/`**: Quản lý trạng thái client-side sử dụng thư viện Zustand.
-   **`src/types/`**: Chứa các định nghĩa kiểu dữ liệu (TypeScript types và interfaces).

---

## 🛠️ Chức năng các file cấu hình chính

Dự án sử dụng các file cấu hình sau để điều phối hoạt động:

-   **`package.json`**: Quản lý thông tin dự án, danh sách các thư viện phụ thuộc (dependencies) và các script chạy lệnh.
-   **`next.config.ts`**: Cấu hình các tính năng của Next.js như rewrite, ảnh, và các tùy chọn build.
-   **`tsconfig.json`**: Quy định các luật biên dịch TypeScript cho dự án.
-   **`prisma/schema.prisma`**: File quan trọng nhất của Prisma, dùng để định nghĩa cấu trúc bảng trong cơ sở dữ liệu.
-   **`components.json`**: File cấu hình cho thư viện UI shadcn/ui.
-   **`.env`**: Lưu trữ các biến môi trường nhạy cảm như thông tin kết nối database.
-   **`Dockerfile.dev` & `Dockerfile.prod`**: Dockerfile dành riêng cho môi trường phát triển và sản xuất.
-   **`docker-compose.dev.yml` & `docker-compose.prod.yml`**: File cấu hình Compose tương ứng cho từng môi trường.
-   **`postcss.config.mjs` & `eslint.config.mjs`**: Cấu hình cho công cụ xử lý CSS (PostCSS) và kiểm tra lỗi mã nguồn (ESLint).

---

## 👤 Tác giả

- **NguyenDuong0609** - [GitHub Profile](https://github.com/NguyenDuong0609)

## 📝 License

Dự án này được cấp phép dưới [MIT License](LICENSE)
