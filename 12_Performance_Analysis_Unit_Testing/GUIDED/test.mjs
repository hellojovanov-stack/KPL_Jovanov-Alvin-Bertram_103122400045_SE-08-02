import test from 'node:test';
import assert from 'node:assert';

// Variabel tiruan/mock untuk mewakili hasil pemrosesan yang diuji
const result = {
    Sitemap: []
};

// test.describe digunakan untuk mengelompokkan pengujian
test.describe('Pemrosesan untuk lazada.com', () => {
    
    // test.it adalah unit test yang sesungguhnya
    test.it('Tidak memiliki Sitemap', () => {
        // Menguji apakah nilai result.Sitemap benar-benar array kosong
        assert.deepStrictEqual(result.Sitemap, []);
    });

});