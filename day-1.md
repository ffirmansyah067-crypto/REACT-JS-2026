NOMOR 2

Kalo JSX untuk mendeskripsikan struktur UI (User Interface) di dalam kode JavaScript (React). Sedangkan HTML untuk mendeskripsikan struktur dan konten halaman web secara mandiri.

Contoh Perbedaan kodenya yaitu : JSX: Menggunakan className untuk mendefinisikan kelas CSS.

Contoh:

HTML: Menggunakan class.

Contoh:

NOMOR 3

Virtual DOM: Representasi ringan dari DOM yang disimpan dalam memori. Cara kerjanya Proses: Render → Diffing → Commit untuk optimasi performa.

NOMOR 4

// Single Page Application (SPA) SPA adalah aplikasi web yang memuat satu halaman HTML dan secara dinamis memperbarui kontennya tanpa perlu memuat ulang seluruh halaman saat pengguna berinteraksi dengan aplikasi.

Kelebihan SPA: Pengalaman Pengguna yang Lebih Mulus: SPA menawarkan pengalaman yang lebih interaktif dan responsif karena tidak ada reload halaman penuh. Performa Lebih Cepat (setelah initial load): Setelah halaman awal dimuat, interaksi selanjutnya dalam SPA cenderung lebih cepat karena hanya bagian yang diperlukan yang diperbarui.

Kekurangan SPA: Waktu Initial Load yang Lebih Lama: SPA mungkin memiliki overhead initial load yang lebih tinggi karena perlu mengunduh seluruh bundle JavaScript, CSS, dan data awal. Tantangan SEO: Crawler mesin pencari mungkin kesulitan mengindeks konten dinamis pada SPA dibandingkan dengan halaman statis pada MPA.

// Multi Page Application (MPA) MPA adalah aplikasi web tradisional yang memuat beberapa halaman HTML saat pengguna menavigasi aplikasi. Setiap interaksi pengguna yang memerlukan konten baru akan memicu reload halaman penuh.

Kelebihan MPA: SEO yang Lebih Baik: MPA lebih cocok untuk SEO karena setiap halaman dapat diindeks secara terpisah oleh mesin pencari. Waktu Initial Load yang Lebih Cepat: Waktu initial load setiap halaman mungkin lebih cepat dibandingkan SPA karena browser hanya perlu memuat konten untuk halaman saat ini.

Kekurangan MPA: Pengalaman Pengguna Kurang Mulus: Memerlukan reload halaman penuh setiap kali navigasi, yang dapat menyebabkan penundaan. Interaksi Lebih Lambat: Memuat halaman baru bisa lebih lambat dibandingkan pembaruan dinamis pada SPA.