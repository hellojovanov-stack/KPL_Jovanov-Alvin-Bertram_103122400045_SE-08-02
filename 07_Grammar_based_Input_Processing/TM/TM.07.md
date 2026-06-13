Tugas Mandiri: Grammar Based Input Processing

Nama : Jovanov Alvin Bertram
NIM : 103122400045
Kelas : SE-08-02

Soal
Buatlah fungsi yang dapat menguraikan isi file robots.txt menjadi objek JavaScript (POJO). Informasi yang harus diproses meliputi:

User-agent
Allow
Disallow
Sitemap

Fungsi harus mampu memproses berbagai file robots.txt dan menghasilkan struktur data yang sesuai.

Kode Sumber

Tersedia pada:

index.js
test.js
structure.d.ts
Output

Hasil pengujian menggunakan Node.js menunjukkan seluruh test berhasil dijalankan.

Tests : 25
Pass : 25
Fail : 0
Deskripsi

Pada tugas ini dibuat sebuah fungsi bernama parseRobots() yang digunakan untuk memproses isi file robots.txt menjadi objek JavaScript yang terstruktur. Tujuan dari fungsi ini adalah agar aturan-aturan yang terdapat pada robots.txt dapat dibaca dan dimanfaatkan oleh program dengan lebih mudah.

Proses parsing dilakukan dengan membaca isi file robots.txt baris demi baris. Setiap baris kemudian diperiksa apakah berisi informasi User-agent, Allow, Disallow, atau Sitemap. Ketika ditemukan User-agent, program akan membuat entri baru pada objek agents. Selanjutnya setiap aturan Allow dan Disallow akan dimasukkan ke dalam user-agent yang sedang aktif. Jika ditemukan Sitemap, alamat sitemap akan disimpan ke dalam array Sitemap.

Struktur data yang dihasilkan memungkinkan beberapa user-agent memiliki aturan masing-masing. Dengan demikian fungsi dapat menangani robots.txt yang sederhana maupun yang memiliki banyak aturan berbeda untuk crawler tertentu.

Untuk memastikan implementasi berjalan dengan benar, dilakukan pengujian menggunakan file robots.txt dari beberapa website yaitu Brave, MikroTik, OpenAI, Lazada, dan Kementerian Agama Republik Indonesia. Pengujian dilakukan menggunakan test.js dengan berbagai skenario yang memeriksa keberadaan user-agent, aturan Allow dan Disallow, serta alamat Sitemap.

Berdasarkan hasil pengujian, seluruh test berhasil dijalankan dengan hasil 25 test berhasil dan tidak ada test yang gagal. Hal ini menunjukkan bahwa fungsi parseRobots() telah bekerja sesuai kebutuhan dan mampu memproses berbagai format robots.txt dengan benar.